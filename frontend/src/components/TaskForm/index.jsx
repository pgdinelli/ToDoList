import { useState, useEffect } from "react";
import { FaEdit, FaTrash, FaRegSquare, FaRegCheckSquare } from "react-icons/fa";

function TaskForm() {
    const [tasksArr, setTasksArr] = useState([]);
    const [task, setTask] = useState('');

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


    console.log(tasksArr)

    return (
        <div className="h-fit w-1/2 p-5 bg-white rounded-xl">
            <div className="w-full mb-3.5">
                <form className="flex justify-between gap-4">
                    <input type="text" placeholder="Adicione uma tarefa..."
                        className="bg-gray-300 w-full py-1 px-2 rounded-md outline-0"
                    />
                    <textarea name="description" id="description"
                        placeholder="Insira uma breve descrição"
                        className="py-1 px-2 border outline-0"></textarea>
                    <button className="bg-green-400 px-1 cursor-pointer rounded-sm">Adicionar</button>
                </form>
            </div>

            <ul className="flex flex-col gap-2">
                {tasksArr.map((task) => {
                    return (
                        <>
                        <li key={task._id} className="w-full flex items-center justify-between gap-2 bg-gray-300 p-2 rounded-md">
                            <div className="flex items-center gap-2">
                                <button className="cursor-pointer">
                                    <FaRegSquare />
                                </button>
                                <h2>{task.title}</h2>
                            </div>

                            <div className="flex items-center gap-3 text-2xl">
                                <button className="cursor-pointer">
                                    <FaEdit className="text-amber-600" />
                                </button>
                                <button className="cursor-pointer">
                                    <FaTrash className="text-red-600" />
                                </button>
                            </div>
                            
                        </li>
                        <p className="p-1 text-gray-500 italic">{task.description}</p>
                        </>
                    )
                })}
            </ul>

        </div>
    )
}

export default TaskForm