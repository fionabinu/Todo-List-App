import React, { useEffect, useState } from "react";
import "./TodoInput.css";

const TodoInput = ({ createTodo, updateItems }) => {
    const [task, setTask] = useState("");
    useEffect(()=>{
        if(updateItems && Object.keys(updateItems).length >0){
            setTask(updateItems.task);
        }
    },[updateItems])
    const handleSubmit = () => {
        createTodo(task);
        setTask("");
    };
    return (
        <div className="TodoInput" >
            <input type="text"
                placeholder="Enter Task"
                id="task"
                name="task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button onClick={()=>handleSubmit()}>{(updateItems && Object.keys(updateItems).length >0)?"Update Todo":"Add Todo"}</button>
        </div>
    );
};


export default TodoInput;