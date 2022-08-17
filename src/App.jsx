import TaskList from "./Components/TaskList";
import TaskForm from "./Components/TaskForm";


function App() {
 


  return (
    <main className="bg-teal-900">
      <div className="container mx-auto p-10">
      <TaskForm />
      <TaskList />
      </div>
    </main>
  );
}

export default App;
