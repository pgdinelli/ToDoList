import { useState, useEffect, Fragment } from "react";
import { FaEdit, FaTrash, FaRegSquare, FaRegCheckSquare } from "react-icons/fa";

function TaskForm() {
    const [tasksArr, setTasksArr] = useState([]);
    const [task, setTask] = useState({ title: '', description: '' });

    const [editingTask, setEditingTask] = useState(null);
    const [editTask, setEditTask] = useState({ title: '', description: '' });

    const API_URL = import.meta.env.VITE_API_URL;

    useEffect(() => {
        const getTasks = async () => {
            try {
                const res = await fetch(API_URL);

                if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

                const data = await res.json();
                setTasksArr(data);
            } catch (error) {
                console.error('Error fetching tasks', error);
            }
        };

        getTasks();
    }, [API_URL]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!task.title) return;

        const payload = {
            title: task.title,
            description: task.description,
            status: false,
        };

        try {
            const res = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            const createdTask = await res.json();

            setTask({ title: '', description: '' });
            setTasksArr(prev => [...prev, createdTask]);

        } catch (error) {
            console.error(error);
        }
    };

    const handleTaskChecked = async (task) => {
        const payload = {
            title: task.title,
            description: task.description,
            status: !task.status,
        };

        try {
            const res = await fetch(`${API_URL}/${task._id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

            const updatedTask = await res.json();
            setTasksArr(prev => prev.map(t => t._id === task._id ? updatedTask : t));
        } catch (error) {
            console.error(error);
        }
    };

    const handleEdit = (task) => {
        setEditingTask(task._id);
        setEditTask({ title: task.title, description: task.description })
    };

    const handleUpdate = async (id) => {
        if (!editTask.title) return;

        try {
            const res = await fetch(`${API_URL}/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title: editTask.title, description: editTask.description })
            });

            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

            const updatedTask = await res.json();
            setTasksArr(prev => prev.map(task => task._id === id ? updatedTask : task));

            setEditingTask(null);
            setEditTask({ title: '', description: '' });
        } catch (error) {
            console.error(error);
        }
    };

    const handleDelete = async (id) => {
        try {
            if (window.confirm('Tem certeza que deseja deletar esta tarefa?')) {
                const res = await fetch(`${API_URL}/${id}`, {
                    method: 'DELETE',
                });

                if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
                setTasksArr(prev => prev.filter(task => task._id !== id));
            }
        } catch (error) {
            console.error('Error deleting task: ', error);
        }
    };

    return (
        <div className="h-fit w-full lg:w-1/2 p-4 lg:p-5 bg-white rounded-xl">
            <div className="w-full mb-3.5">
                <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row justify-between gap-3">
                    <input type="text" placeholder="Adicione uma tarefa..."
                        className="bg-gray-300 w-full py-1 px-2 rounded-md outline-0"
                        value={task.title}
                        onChange={(e) => setTask(prev => ({ ...prev, title: e.target.value }))}
                    />
                    <textarea name="description" id="description"
                        placeholder="Insira uma breve descrição"
                        className="w-full py-1 px-2 border outline-0 rounded-md resize-none h-16 md:h-auto"
                        value={task.description}
                        onChange={(e) => setTask(prev => ({ ...prev, description: e.target.value }))}
                    >

                    </textarea>
                    <button className="bg-green-400 w-full md:w-auto px-4 py-2 cursor-pointer rounded-md font-medium">Adicionar</button>
                </form>
            </div>

            <ul className="flex flex-col gap-2">
                {tasksArr.map((task) => {
                    return (
                        <Fragment key={task._id}>
                            <li className="w-full flex flex-col gap-2 bg-gray-300 p-2 md:p-3 rounded-md">
                                {editingTask === task._id ? (
                                    <>
                                        <input
                                            type="text"
                                            className="bg-white w-full py-1 px-2 rounded-md outline-0"
                                            value={editTask.title}
                                            onChange={(e) => setEditTask(prev => ({ ...prev, title: e.target.value }))}
                                        />

                                        <textarea
                                            className="bg-white w-full py-1 px-2 border outline-0 rounded-md resize-none h-16"
                                            value={editTask.description}
                                            onChange={(e) => setEditTask(prev => ({ ...prev, description: e.target.value }))}
                                        />

                                        <div className="flex gap-2">
                                            <button
                                                className="cursor-pointer w-1/2 text-sm bg-green-400 py-1 rounded"
                                                onClick={() => handleUpdate(task._id)}>
                                                Salvar
                                            </button>
                                            <button
                                                className="cursor-pointer w-1/2 text-sm bg-gray-400 py-1 rounded"
                                                onClick={() => setEditingTask(null)}>
                                                Cancelar
                                            </button>
                                        </div>
                                    </>
                                ) : (

                                    <div className="flex items-center justify-between gap-2">
                                        <div className="flex items-center gap-2 min-w-0">
                                            <button className="cursor-pointer p-2 shrink-0"
                                                onClick={() => handleTaskChecked(task)}>
                                                {task.status
                                                    ? <FaRegCheckSquare className="text-green-600" />
                                                    : <FaRegSquare />
                                                }
                                            </button>
                                            <h2 className={`${task.status ? 'line-through text-gray-400' : ''}`}>
                                                {task.title}
                                            </h2>
                                        </div>
                                        <div className="flex items-center gap-1 md:gap-3 text-xl md:text-2xl shrink-0">
                                            <button className="cursor-pointer p-2" onClick={() => handleEdit(task)}>
                                                <FaEdit className="text-amber-600" />
                                            </button>
                                            <button className="cursor-pointer p-2" onClick={() => handleDelete(task._id)}>
                                                <FaTrash className="text-red-600" />
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </li>

                            {editingTask !== task._id && (
                                <p className={`px-2 text-sm italic ${task.status ? 'line-through text-gray-400' : 'text-gray-500'}`}>
                                    {task.description}
                                </p>
                            )}
                        </Fragment>
                    )
                })}
            </ul>

        </div>
    )
}

export default TaskForm