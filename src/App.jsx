import { useState } from "react"
import Header from "./components/Header"
import TodoList from "./components/TodoList"
import "./App.css"

function App()
{
const [todos, setTodos] = useState(() => {
  return JSON.parse(localStorage.getItem("todos")) || [];
});


  return (
    <div className="container">
      <h1>To-Do-List-App</h1>
      
      {/* header component responsible for adding todos */}
      <Header todos={todos} setTodos={setTodos}/>
       {/* todolist component responsible for displaying todos */}
      <TodoList todos={todos} setTodos={setTodos}/>

    </div>
  )

}
export default App