import { FaEdit, FaTrash } from "react-icons/fa";

function TaskForm() {
    return (
        <div className="h-fit w-1/2 p-5 bg-white rounded-xl">
            <div className="w-full mb-3.5">
                <form className="flex justify-between gap-4">
                    <input type="text" placeholder="Adicione uma tarefa..." 
                    className="bg-gray-300 w-full py-1 px-2 rounded-md outline-0"
                    />
                    <button className="bg-green-400 px-1 cursor-pointer rounded-sm">Adicionar</button>
                </form>
            </div>

            <div className="bg-gray-300 w-full p-2 flex justify-between items-center rounded-md">
                <ul>
                    <li>Tarefa de teste 1</li>
                </ul>
                <div className="flex gap-3 items-center text-2xl">
                    <button className="cursor-pointer">
                        <FaEdit className="text-amber-600"/>
                    </button>
                    <button className="cursor-pointer">
                        <FaTrash className="text-red-600"/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TaskForm