import React from 'react'
import TodoItem from './TodoItem'
import "../components/TodoList.css"

const TodoList = ({todos,setTodos}) => {


    //editing the todo item
    function setnewvalue (editinput,index)
    {
        const newtodos=todos.map((item,index2)=>{
        

                if(index==index2)
                {
                          return {
                    ...item,
                    todo: editinput,
                    isCompleted: false,
                };
                }
                return item;
        })

            setTodos(newtodos);
        
              
                localStorage.removeItem("todos");
          
             localStorage.setItem("todos",JSON.stringify(newtodos) );

    }

// deleting the todo item
     function deletevalue (index)
    {
        const newtodos=todos.filter((item,index2)=>{
            console.log(item)
                if(index==index2)
                {
                    return false
                }
                return item;
        })

        setTodos(newtodos);
        localStorage.removeItem("todos");
        localStorage.setItem("todos",JSON.stringify(newtodos) );

    }
// toggling the line through for completed todos
    function linethrough(index)
    {


 const newtodos=todos.map((item,index2)=>{
        
   console.log(index2);
   console.log(index);
                if(index==index2)
                {
                          return {
                    ...item,
                    todo: item.todo,
                    isCompleted: !item.isCompleted,
                };
             
                }
                return item;
        })

       
               setTodos(newtodos);
     
                localStorage.removeItem("todos");
          
             localStorage.setItem("todos",JSON.stringify(newtodos) );

    }





  return (
    <div className='todolist'>

{
    todos.map((item,index)=>{

        return(<TodoItem key={index} index={index} item={item.todo} 
            linethrough={linethrough} iscompleted={item.isCompleted} deletevalue={deletevalue}  setnewvalue={setnewvalue} />)
    })
}


        
    </div>
  )
}

export default TodoList