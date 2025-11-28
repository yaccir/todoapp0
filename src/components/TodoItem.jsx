import React, { useState } from 'react'

const TodoItem = ({index,iscompleted,item,setnewvalue,deletevalue,linethrough}) => {

const [togleedit,settogleedit]=useState(false);
const [editinput,seteditinput]=useState(item);



  return (
    <div>
        <div onClick={()=>{linethrough(index)}} style={{textDecoration:iscompleted?"line-through":"none"}}>
            <p>{index}</p>
          { togleedit ? <input type="text" onChange={(e)=>{seteditinput(e.target.value)}} value={editinput} /> : 
          
          <span >{editinput}</span>}
        </div>
    
  <div>
             <button onClick={(e)=>{

                    settogleedit(!togleedit)
                    if(!togleedit){
                        setnewvalue(editinput,index)

                    }


             }}>

                {togleedit?"Save":"Edit"}
             </button>
            
             <button onClick={()=>deletevalue(index)}>Delete</button>
  </div>

    </div>
  )
}

export default TodoItem