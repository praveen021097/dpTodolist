

export const Todoitem = ({todo ,handleId}) =>{
return <div className="output">
    
    {todo.title}-{todo.status?"done":"notDone"}
<button className="addbutton" onClick={()=>
handleId(todo.id)
}></button>
</div>
}