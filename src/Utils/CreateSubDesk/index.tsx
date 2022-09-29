import { nanoid } from "nanoid";
import { useState } from "react";

interface ICreateSubDesk {
    nameArray: any;
    setNameArray: any;
    deskItem: any;
    e: any;
}

export const CreateSubDeskf = (nameArray: any, setNameArray: any, deskItem: any, e: any) => {
    const [taskName, setTaskName] = useState('');
    const taskId = nanoid();

    if (e.keyCode === 13 && taskName !== '') {
        const name = nameArray;
        setNameArray(taskName);
        deskItem.taskArray = [...deskItem.taskArray, { name: name, status: true, id: taskId, idConfirmed: true }];
        setNameArray('');
        setTaskName('');
    }
};