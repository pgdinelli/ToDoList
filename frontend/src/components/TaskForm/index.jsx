function TaskForm() {
    return (
        <div className="h-fit w-1/2 p-5 bg-white rounded-xl">
            <div className="w-full">
                <form className="flex justify-between gap-4">
                    <input type="text" placeholder="Adicione uma tarefa..." 
                    className="bg-gray-300 w-full py-1 px-2 rounded-md outline-0"
                    />
                    <button className="bg-green-400 px-1 cursor-pointer rounded-sm">Adicionar</button>
                </form>
            </div>
        </div>
    )
}

export default TaskForm