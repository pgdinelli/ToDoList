import { useState, useEffect, Fragment } from "react";
import { FaEdit, FaTrash, FaRegSquare, FaRegCheckSquare } from "react-icons/fa";

function TaskForm() {
    const [tasksArr, setTasksArr] = useState([]);
    const [task, setTask] = useState({ title: '', description: '' });

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

    const handleUpdate = async (id) => {

        //TODO: implementar função de atualizar tarefas
    };

    const handleDelete = async (id) => {
        try {
            if (window.confirm('Tem certeza que deseja deletar esta tarefa?')) {
                const res = await fetch(`${API_URL}/${id}`, {
                    method: 'DELETE',
                });

                if(!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
                setTasksArr(prev => prev.filter(task => task._id !== id));
            }
        } catch (error) {
            console.error('Error deleting task: ', error);
        }
    };


    console.log(tasksArr)

    return (
        <div className="h-fit w-1/2 p-5 bg-white rounded-xl">
            <div className="w-full mb-3.5">
                <form onSubmit={handleSubmit} className="flex justify-between gap-4">
                    <input type="text" placeholder="Adicione uma tarefa..."
                        className="bg-gray-300 w-full py-1 px-2 rounded-md outline-0"
                        value={task.title}
                        onChange={(e) => setTask(prev => ({ ...prev, title: e.target.value }))}
                    />
                    <textarea name="description" id="description"
                        placeholder="Insira uma breve descrição"
                        className="py-1 px-2 border outline-0"
                        value={task.description}
                        onChange={(e) => setTask(prev => ({ ...prev, description: e.target.value }))}
                    >

                    </textarea>
                    <button className="bg-green-400 px-1 cursor-pointer rounded-sm">Adicionar</button>
                </form>
            </div>

            <ul className="flex flex-col gap-2">
                {tasksArr.map((task) => {
                        return (
                            <Fragment key={task._id}>
                                <li className="w-full flex items-center justify-between gap-2 bg-gray-300 p-2 rounded-md">
                                    <div className="flex items-center gap-2">
                                        <button className="cursor-pointer">
                                            <FaRegSquare />
                                        </button>
                                        <h2>{task.title}</h2>
                                    </div>

                                    <div className="flex items-center gap-3 text-2xl">
                                        <button className="cursor-pointer"
                                            onClick={() => handleUpdate(task._id)}
                                        >
                                            <FaEdit className="text-amber-600" />
                                        </button>
                                        <button className="cursor-pointer"
                                            onClick={() => handleDelete(task._id)}
                                        >
                                            <FaTrash className="text-red-600" />
                                        </button>
                                    </div>

                                </li>
                                <p className="p-1 text-gray-500 italic">{task.description}</p>
                            </Fragment>
                        )
                    })}
            </ul>

        </div>
    )
}

export default TaskForm