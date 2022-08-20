import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { useTypedSelectors } from "../../../hooks/useTypedSelectors";

import { IDesk, ISubTaskArray, ITask, UserListAction } from "../../../type";
import { SubDesk } from "../SubDesk";
import { SetTaskName } from "../SetTaskName";

import './style.scss';


const TaskPage = () => {
    const dispatch = useDispatch();
    const router = useNavigate();
    const params = useParams();
    const [open, setOpen] = useState(true);
    const [subDeskName, setsubDeskName] = useState('');
    const [nameArray, setNameArray] = useState('');
    const { deskList } = useTypedSelectors(state => state.desk);

    const deleteTask = (taskIndex: string) => {
        const newList = deskList.map((desk: IDesk) => {
            if (desk.id === params.taskId) {
                const newDesk = desk.array.map((currentTask) => {
                    const taskArray = currentTask.taskArray.filter((task: ITask) => task.id !== taskIndex);

                    return {
                        ...currentTask,
                        taskArray,
                    }
                });

                return {
                    ...desk,
                    array: newDesk,
                }
            }

            return desk;
        });

        dispatch({ type: UserListAction.REMOVE_TASK, payload: [...newList] });
    };

    const confirmTask = (taskIndex: string) => {
        const newList = deskList.map((desk: IDesk) => {
            if (desk.id === params.taskId) {
                const newDesk = desk.array.map((currentDesk) => {
                    const taskArray = currentDesk.taskArray.map((task) => {
                        if (task.id === taskIndex) {
                            return {
                                ...task,
                                isConfirmed: !task.isConfirmed,
                            }
                        }

                        return task;
                    });

                    return {
                        ...currentDesk,
                        taskArray,
                    }
                });

                return {
                    ...desk,
                    array: newDesk,
                }
            }

            return desk;
        });

        dispatch({ type: UserListAction.COMPLETE, payload: [...newList] });
    };
    
    const updateDeskList = (storage: any) => {
        if (storage !== null) {
            const stateFromLocalStorage = JSON.parse(storage);
            dispatch({ type: UserListAction.ADD_STORE_IN_LOCAL_STORAGE, payload: stateFromLocalStorage });
        }
    }

    useEffect(() => {
        updateDeskList(window.localStorage.getItem('addDesk'));
    }, []);

    useEffect(() => {
        window.localStorage.setItem('addDesk', JSON.stringify(deskList));
    }, [deskList]);


    return (
        <section className="task-page">
            <div className="task-page__inner">
                <button
                    className="task-page__button-back"
                    onClick={() => { router(`/`) }}
                >
                    Назад
                </button>

                {deskList.map((desk: IDesk) => {
                    if (desk.id === params.taskId) {
                        return <h1 className="task-page__title" key={Date.now()}>{desk.name}</h1>
                    }
                })}

                <div className="task-page__task-name">
                    {
                        open
                            ?
                            <button className="task-page__button"
                                onClick={() => { setOpen(!open) }}
                            >Добавить список
                            </button>

                            :
                            <SetTaskName 
                                setOpen={setOpen}
                                open={open}
                                setsubDeskName={setsubDeskName}
                                subDeskName={subDeskName}
                                deskList={deskList}
                            />
                    }
                </div>
                <div>
                    <ul className="task-page__task-name-list">
                        {
                            deskList.map((desk: IDesk) => {
                                if (desk.id === params.taskId) {

                                    return (
                                        desk.array.map((deskItem: ISubTaskArray) => {
                                            return (
                                                <SubDesk
                                                    key={deskItem.id}
                                                    deskItem={deskItem}
                                                    desk={desk}
                                                    nameArray={nameArray}
                                                    setNameArray={setNameArray}
                                                    confirmTask={confirmTask}
                                                    deleteTask={deleteTask}
                                                />
                                            )
                                        })
                                    )
                                }
                            })
                        }
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default TaskPage;
