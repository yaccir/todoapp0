import React, { useState } from 'react'
import "../components/ToDoItem.css"

const TodoItem = ({index,iscompleted,item,setnewvalue,deletevalue,linethrough}) => {

const [togleedit,settogleedit]=useState(false);
const [editinput,seteditinput]=useState(item);



  return (
    <div className='todo-item'>
        <div className='item' onClick={()=>{linethrough(index)}} style={{textDecoration:iscompleted?"line-through":"none",
          color:iscompleted?"red":"black"}}>
            <p className='index'>{index}</p>
            

              {/* conditional rendering for edit mode */}
          { togleedit ? <input type="text" className='input-edit' onChange={(e)=>{seteditinput(e.target.value)}} value={editinput} /> : 
          
          //conditional rendering based on whether the edit mode is toggled
          <span className='todocontent' > {editinput.trim()!=="" && <>{editinput}</>} {editinput.trim()=="" && item} {iscompleted&&<pre style={{"display":"inline"}}>  Completed</pre>}</span>}
        </div>
    
  <div>
    {/* buttons for edit and delete */}
             <button className='edit-btn' onClick={(e)=>{

                    settogleedit(!togleedit)
                    if(!togleedit){
                      if(editinput.trim()!=="")
                        setnewvalue(editinput,index)

                    }


             }}>

                {togleedit?"Save":"Edit"}
             </button>
            
             <button className='delete-btn' onClick={()=>deletevalue(index)}>Delete</button>
  </div>

    </div>
  )
}

export default TodoItem