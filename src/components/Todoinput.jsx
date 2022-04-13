import { useState } from "react"

export const Todoinput =({getData})=>{
        const [text,setText]=useState("")
    return <div className="adddinput">
        <input type="text" placeholder="enter todo"  onChange={(e)=>{
            setText(e.target.value)
        }}/>
        <button onClick={()=>{
            getData(text)
        }}>+</button>
    
    </div>
}