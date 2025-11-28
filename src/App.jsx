import { useState } from "react"
import Header from "./components/Header"
import TodoList from "./components/TodoList"

function App()
{
const [todos, setTodos] = useState(() => {
  return JSON.parse(localStorage.getItem("todos")) || [];
});


  return (
    <div>
      <Header todos={todos} setTodos={setTodos}/>
      <TodoList todos={todos} setTodos={setTodos}/>

    </div>
  )

}
export default App