import { nanoid } from "nanoid";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useTypedSelectors } from "../../../hooks/useTypedSelectors";

import { IDesk, ISubTaskArray, ITask } from "../../../type";
import { Input } from "../input";
import { Task } from "../task";

import './style.scss';


const TaskPage = () => {
    const router = useNavigate();
    const params = useParams();
    const [open, setOpen] = useState(true);
    const [subDeskName, setsubDeskName] = useState('');
    const [nameArray, setNameArray] = useState('');
    const deskList = useTypedSelectors(state => state.desk);
    
    return (
        <section className="task-page">
            <div className="task-page__inner">
                <button
                    className="task-page__button-back"
                    onClick={() => { router(`/`) }}
                >
                    Назад
                </button>
                
                {deskList.deskList.map((desk: IDesk) => {
                    if (desk.id === Number(params.taskId)) {
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
                            <div className="task-page__input-name-wrapper">
                                <button
                                    className="task-page__button-close"
                                    onClick={() => { setOpen(!open) }}
                                >
                                    <span className="task-page__span"></span>
                                </button>

                                <input
                                    className="task-page__input"
                                    type="text"
                                    placeholder="Название задачи"
                                    value={subDeskName}
                                    onChange={(e) => { setsubDeskName(e.target.value) }}
                                    onKeyDown={(e) => {
                                        if (e.keyCode === 13) {
                                            {
                                                deskList.deskList.map((desk: IDesk) => {
                                                    if (desk.id === Number(params.taskId)) {
                                                        const newSubDeskArray = { name: subDeskName, taskArray: []};
                                                        desk.array = [...desk.array, newSubDeskArray]
                                                        setsubDeskName('')
                                                    }
                                                })
                                            }
                                        }
                                    }}
                                />
                            </div>
                    }
                </div>
                <div>
                    <ul className="task-page__task-name-list">
                        {
                            deskList.deskList.map((desk: IDesk) => {
                                if (desk.id === Number(params.taskId)) {
                                    return (
                                        desk.array.map((deskItem: ISubTaskArray) => {
                                            return (
                                                <li className="task-page__task-name-item" key={desk.id}>
                                                    <>
                                                        <h2>{deskItem.name}</h2>
                                                        <Input 
                                                            nameArray={nameArray}
                                                            setNameArray={setNameArray}
                                                            deskItem={deskItem}
                                                        />
                                                        {
                                                            deskItem.taskArray.map((item: any, index) => {
                                                                return (
                                                                    <Task 
                                                                        item={item} 
                                                                        index={index} 
                                                                    />
                                                                )
                                                            })
                                                        }
                                                    </>
                                                </li>
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