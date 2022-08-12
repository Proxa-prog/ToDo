import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useTypedSelectors } from "../../../hooks/useTypedSelectors";
import { IDesk, UserListAction } from "../../../type";

export const Task = ({item, index, deskItem}: any) => {
    const [complete, setComplete] = useState(true);
    const dispatch = useDispatch();
    const params = useParams();
    const deskList = useTypedSelectors(state => state.desk);

    const deleteTask = (array: any, currentItem: any) => {
        array.map((desk: IDesk) => {
            if (desk.id === Number(params.taskId)) {
                desk.array.map((currentTask) => {
                    const newArray = currentTask.taskArray.filter((task: any) => task !== currentItem);
                    currentTask.taskArray = [...newArray]
                })
            }
        })

        return array;
    }

    const removeTask = (newDeskList: any, Task: IDesk) => {
        console.log(deskList.deskList)
        const newDeasArray = deleteTask(newDeskList, Task);
        
        console.log(newDeasArray)
        dispatch({type: UserListAction.REMOVE_TASK, payload: [...newDeasArray]});
        
      }

    return (
        <div className={complete ? 'task-page__task' : 'task-page__task-complete'} key={index}>
            {item}
            <button onClick={() => {setComplete(!complete)}}>+</button>
            <button onClick={() => {
                    removeTask(deskList.deskList, item);
                }}
            >
                X
            </button>
        </div>
    )
}

