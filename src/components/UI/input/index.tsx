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
                const name = props.nameArray;
                props.setNameArray(props.taskName);
                props.deskItem.taskArray = [...props.deskItem.taskArray, {name: name, status: true}];
                props.setNameArray('');
            }
        }}
    />
    )
}