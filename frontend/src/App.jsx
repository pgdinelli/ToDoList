import TaskForm from "./components/TaskForm"
import Title from "./components/Title"

function App() {

  return (
    <main className="w-full min-h-screen px-10 flex flex-col items-center gap-4 justify-center bg-gray-300">
      <Title />
      <TaskForm />
    </main>
  )
}

export default App
