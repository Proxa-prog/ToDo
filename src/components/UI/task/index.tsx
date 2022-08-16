import { nanoid } from "nanoid";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useTypedSelectors } from "../../../hooks/useTypedSelectors";
import { IDesk, ITask, UserListAction } from "../../../type";

export const Task = ({ item }: any) => {
    const [complete, setComplete] = useState(false);
    const dispatch = useDispatch();
    const params = useParams();
    const { deskList } = useTypedSelectors(state => state.desk);

    const deleteTask = (array: any, currentItem: ITask) => {
        array.map((desk: IDesk) => {
            if (desk.id === Number(params.taskId)) {
                desk.array.map((currentTask) => {
                    const newArray = currentTask.taskArray.filter((task: ITask) => task.id !== currentItem.id);
                    currentTask.taskArray = newArray;
                });
            }
        });

        return array;
    }

    const confirmTask = (array: any, currentStatus: boolean, evt: any) => {
        array.map((desk: IDesk) => {
            if (desk.id === Number(params.taskId)) {
                desk.array.map((currentDesk) => {
                    const newArray = currentDesk.taskArray.map((task) => {
                        if (evt.name === task.id) {
                            setComplete(!currentStatus);
                            task.status = currentStatus

                            return task;
                        }

                        return task;
                    });
                    currentDesk.taskArray = [...newArray];

                });
            }
        });

        return array;
    }

    const dispatchPerformATask = (newDeskList: any, status: boolean, evt: any) => {
        const newDeskArray = confirmTask(newDeskList, status, evt);
        dispatch({ type: UserListAction.COMPLETE, payload: [...newDeskArray] });
    }

    const dispatchDeleteTask = (newDeskList: any, Task: ITask) => {
        const newDeskArray = deleteTask(newDeskList, Task);
        dispatch({ type: UserListAction.REMOVE_TASK, payload: [...newDeskArray] });
    }

    return (
        <div className={item.status ? 'task-page__task' : 'task-page__task-complete'}>
            {item.name}
            <div className="task-page__button-wrapper">
                <button
                    className={item.status ? 'task-page__button-complete' : 'task-page__button-unComplete'}
                    name={item.id}
                    onClick={(e) => { dispatchPerformATask(deskList, complete, e.target) }}
                ></button>
                <button
                    className="task-page__button-delete"
                    onClick={() => { dispatchDeleteTask(deskList, item) }}
                ></button>
            </div>
        </div>
    )
}
