import React, { useState } from 'react'
import "../components/Header.css"

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
    <div className='header'>


    <form className='form' action="" onSubmit={handlesubmit}>
    {/* CAPTURING THE INPUT FOR TODOS  */}
    <input className='main-input' type="text" value={input} onChange={(e)=>setInput(e.target.value)}  />
    <input className='submit-btn' type="submit" value={"submit"} />
    </form>

    </div>
  )
}

export default Header