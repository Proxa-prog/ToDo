import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useTypedSelectors } from "../../../hooks/useTypedSelectors";
import { IDesk, ITask, UserListAction } from "../../../type";

export const Task = ({item, index}: any) => {
    const [complete, setComplete] = useState(false);
    const dispatch = useDispatch();
    const params = useParams();
    const deskList = useTypedSelectors(state => state.desk);

    const deleteTask = (array: any, currentItem: any) => {
        array.map((desk: IDesk) => {
            if (desk.id === Number(params.taskId)) {
                desk.array.map((currentTask) => {
                    const newArray = currentTask.taskArray.filter((task: any) => task.name !== currentItem.name);
                    currentTask.taskArray = [...newArray]
                })
            }
        })
        return array;
    }

    const performATask = (array: any, currentStatus: any, evt: any) => {
        array.map((desk: IDesk) => {
            if (desk.id === Number(params.taskId)) {
                desk.array.map((currentDesk) => {
                    const newArray = currentDesk.taskArray.map((task) => { 
                        if (evt.name === task.name) {
                            setComplete(!currentStatus);
                            task.status = currentStatus
                            return task
                        }
                        return task
                    });
                    currentDesk.taskArray = [...newArray];

                })
            }
        })
        return array;
    }

    const dispatchPerformATask = (newDeskList: any, status: boolean, evt: any) => {
        const newDeskArray = performATask(newDeskList, status, evt);
        dispatch({type: UserListAction.COMPLETE, payload: [...newDeskArray]});
      }

    const dispatchDeleteTask = (newDeskList: any, Task: any) => {
        const newDeskArray = deleteTask(newDeskList, Task);
        dispatch({type: UserListAction.REMOVE_TASK, payload: [...newDeskArray]});
      }
      
    return (
        <div className={item.status ? 'task-page__task' : 'task-page__task-complete'} key={index}>
            {item.name}
            <button name={item.name} onClick={(e) => {dispatchPerformATask(deskList.deskList, complete, e.target)}}>
                +
            </button>
            <button onClick={() => {dispatchDeleteTask(deskList.deskList, item)}}>
                X
            </button>
        </div>
    )
}

