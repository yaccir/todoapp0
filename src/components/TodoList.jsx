import React from 'react'
import TodoItem from './TodoItem'
import "../components/TodoList.css"

const TodoList = ({todos,setTodos}) => {
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

        async function  updatetodos()
        {
            await    setTodos(newtodos);
        }
                updatetodos();
                localStorage.removeItem("todos");
          
             localStorage.setItem("todos",JSON.stringify(newtodos) );

    }


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