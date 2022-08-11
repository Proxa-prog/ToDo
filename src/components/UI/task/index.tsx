import { useState } from "react";

export const Task = ({item, deleteTask, index, deskItem}: any) => {
    const [complete, setComplete] = useState(true);
    
    return (
        <div className={complete ? 'task-page__task' : 'task-page__task-complete'} key={index}>
            {item}
            <button onClick={() => {setComplete(!complete)}}>+</button>
            <button onClick={(e) => {deleteTask(deskItem.taskArray, e.currentTarget); console.log(item); console.log(e.target)}}>X</button>
        </div>
    )
}