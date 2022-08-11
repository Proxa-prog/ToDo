import { useState } from "react";

export const Input = (props: any) => {
    const [taskName, setTaskName] = useState('');
    
    return (
        <input
        type="text"
        value={taskName}
        onChange={(e) => {
            setTaskName(e.target.value);
            props.setNameArray(e.target.value);
        }}
        onKeyDown={(e) => {
            if (e.keyCode === 13 && e.currentTarget) {
                props.setNameArray(props.taskName);
                props.deskItem.taskArray = [...props.deskItem.taskArray, props.nameArray];
                props.setNameArray('');
            }
        }}
    />
    )
}