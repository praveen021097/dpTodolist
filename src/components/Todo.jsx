import { useState } from "react";
import {Todoinput} from "./Todoinput"
import {Todoitem} from "./Todoitem"
import {nanoid} from "nanoid";
function  Todo(){
const [todolist, setTodolist]= useState([])


const getData=(todo)=>{
    const payload={
        title:todo,
        status:false,
        id:nanoid(5),
    }
   setTodolist([...todolist,payload]);
}

const handleId=(id)=>{
    console.log(id);
    const newarr=todolist.map(e=>{
        if(e.id===id){
            return {
                ...e,
                status:!e.status
            }
            
        }
        return e
    });

    setTodolist(newarr)
}
    return <div>
             
            {
                todolist.map((el)=>(
                    <Todoitem handleId={handleId} todo={el}></Todoitem>


                ))
            }
           <Todoinput  getData={getData}/>
    </div>
}

export {Todo};