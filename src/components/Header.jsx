import React, { useState } from 'react'

const Header = ({todos,setTodos}) => {

    const [input,setInput]=useState("")
    

const handlesubmit=(e)=>{

e.preventDefault();
setInput("");

setTodos([...todos,{todo:input,isCompleted:false}])
localStorage.setItem("todos",JSON.stringify([...todos,{todo:input,isCompleted:false}]) );



    
}


  return (
    <div>


    <form action="" onSubmit={handlesubmit}>

    <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}  />
    <input type="submit" value={"submit"} />
    </form>

    </div>
  )
}

export default Header