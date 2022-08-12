import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useTypedSelectors } from "../../../hooks/useTypedSelectors";
import { IDesk, ITask, UserListAction } from "../../../type";

export const Task = ({item, index}: any) => {
    const [complete, setComplete] = useState(true);
    const dispatch = useDispatch();
    const params = useParams();
    const deskList = useTypedSelectors(state => state.desk);

    const deleteTask = (array: any, currentItem: any) => {
        array.map((desk: IDesk) => {
            if (desk.id === Number(params.taskId)) {
                desk.array.map((currentTask) => {
                    console.log(currentTask)
                    const newArray = currentTask.taskArray.filter((task: any) => task.name !== currentItem.name);
                    currentTask.taskArray = [...newArray]
                })
            }
        })
        return array;
    }

    const performATask = (array: any, currentStatus: any) => {
        array.map((desk: IDesk) => {
            if (desk.id === Number(params.taskId)) {
                desk.array.map((currentTask) => {
                    setComplete(!currentStatus);
                    currentTask.taskArray.map((task) => task.status = currentStatus);
                })
            }
        })

        return array;
    }

    const dispatchPerformATask = (newDeskList: any, status: boolean) => {
        const newDeskArray = performATask(newDeskList, status);
        
        dispatch({type: UserListAction.COMPLETE, payload: [...newDeskArray]});
      }

    const dispatchDeleteTask = (newDeskList: any, Task: any) => {
        const newDeskArray = deleteTask(newDeskList, Task);
        dispatch({type: UserListAction.REMOVE_TASK, payload: [...newDeskArray]});
      }

    return (
        <div className={complete ? 'task-page__task' : 'task-page__task-complete'} key={index}>
            {item.name}
            <button onClick={() => {dispatchPerformATask(deskList.deskList, complete)}}>
                +
            </button>
            <button onClick={() => {dispatchDeleteTask(deskList.deskList, item)}}>
                X
            </button>
        </div>
    )
}

