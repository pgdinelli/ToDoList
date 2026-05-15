import { FaEdit, FaTrash, FaRegSquare, FaRegCheckSquare } from "react-icons/fa";

function TaskForm() {
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

            <ul>
                <div className="flex flex-col">
                    <li className="w-full flex items-center justify-between gap-2 bg-gray-300 p-2 rounded-md">
                        <div className="flex items-center gap-2">
                            <button className="cursor-pointer">
                                <FaRegSquare />
                            </button>
                            <h2>Tarefa de teste 1</h2>
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
                    <p className="p-2 text-gray-500 italic">Breve descrição da tarefa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iure porro sed maxime tempora, dolorum, praesentium quia eaque laborum, facilis tenetur soluta cum reiciendis. Quisquam dicta officiis dignissimos debitis maxime dolorem adipisci dolor eos nobis. Ea nostrum modi architecto. Quibusdam, corporis beatae. Dolore possimus dolor quis enim eos, accusantium eum veniam tempora fuga rem voluptate eaque! Deserunt magnam temporibus veniam dolor vitae et illum consectetur sint. Quis repudiandae vitae exercitationem aliquid esse nobis nisi odio at modi porro temporibus facere est, iure magni, voluptate voluptatem id! Ex, obcaecati. Mollitia autem aperiam numquam delectus consectetur corporis maxime voluptatem tempore consequuntur error.</p>
                </div>

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