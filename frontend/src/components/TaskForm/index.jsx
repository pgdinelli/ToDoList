import { FaEdit, FaTrash, FaRegSquare, FaRegCheckSquare } from "react-icons/fa";

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
            
            <ul className="w-full flex flex-col gap-3">
                <li className="w-full flex items-center justify-between gap-2 bg-gray-300 p-2 rounded-md">
                    <div className="flex items-center gap-2">
                        <button className="cursor-pointer">
                            <FaRegSquare />
                        </button>
                        Tarefa de teste 1
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

                <li className="w-full flex items-center justify-between gap-2 bg-gray-300 p-2 rounded-md">
                    <div className="flex items-center gap-2">
                        <button className="cursor-pointer">
                            <FaRegCheckSquare />
                        </button>
                        Tarefa de teste 2
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
            </ul>

        </div>
    )
}

export default TaskForm