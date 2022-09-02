import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";

import { useTypedSelectors } from "../../hooks/useTypedSelectors";

import { IDesk, ISubTaskArray, ITask } from "../../type";
import { SubDesk } from "../SubDesk";
import { SetTaskName } from "../SetTaskName";

import { completeTaskAction, remoeveTaskAction } from "../../store/redusers/TaskList";
import { getTaskCard } from "../../thunk/taskCard";

import './style.scss';
import { Settings } from "../Setting";
import { addColorAction } from "../../store/redusers/Color";
import { Button } from "../UI/Button";



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

        dispatch(remoeveTaskAction([...newList]));
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

        dispatch(completeTaskAction([...newList]));
    };
    
    useEffect(() => {
        // @ts-ignore:next-line
        dispatch(getTaskCard());
    }, []);

    useEffect(() => {
        window.localStorage.setItem('addDesk', JSON.stringify(deskList));
    }, [deskList]);

    return (
        <section className="task-page">
            <div className="task-page__inner">
                <Button
                    className="task-page__button-back"
                    onClick={() => {
                        router(`/`)
                    }}
                >
                    Назад
                </Button>

                {deskList.map((desk: IDesk) => {
                    if (desk.id === params.taskId) {
                        return (
                            <div key={Date.now()}>
                                <h1 className="task-page__title" >{desk.name}</h1>
                                <Link to={`/settings${params.taskId}`}>Настройки</Link>
                            </div>
                        )
                    }
                })}

                <div className="task-page__task-name">
                    {
                        open
                            ?
                            <Button className="task-page__button"
                                onClick={() => {
                                    setOpen(!open)
                                }}
                            >Добавить список
                            </Button>

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
