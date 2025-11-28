import React, { useState } from 'react'

const Header = ({todos,setTodos}) => {

    const [input,setInput]=useState("")
    

const handlesubmit=(e)=>{

e.preventDefault();
setInput("");

setTodos([...todos,{todo:input,isCompleted:false}])
// STORING THE TODOS TO THE LOCAL STORAGE 
localStorage.setItem("todos",JSON.stringify([...todos,{todo:input,isCompleted:false}]) );



    
}


  return (
    <div>


    <form action="" onSubmit={handlesubmit}>
    {/* CAPTURING THE INPUT FOR TODOS  */}
    <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}  />
    <input type="submit" value={"submit"} />
    </form>

    </div>
  )
}

export default Header