import { nanoid } from "nanoid";
import { useState } from "react";
import { useParams } from "react-router-dom";

import { useTypedSelectors } from "../../../hooks/useTypedSelectors";

import { IDesk, ISubTaskArray } from "../../../type";

import './style.scss';


const TaskPage = () => {
    const params = useParams();
    const [open, setOpen] = useState(true);
    const [InputOpen, setInputOpen] = useState(true);
    const [subDeskName, setsubDeskName] = useState('');
    const [taskName, setTaskName] = useState('');
    const [nameArray, setNameArray] = useState('');
    const deskList = useTypedSelectors(state => state.desk);

    return (
        <section className="task-page">
            <div className="task-page__inner">
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
                                onClick={() => {setOpen(!open)}}
                            >Добавить список
                        </button>

                        : 
                        <div className="task-page__input-name-wrapper">
                            <button className="task-page__button-close">
                                <span className="task-page__span"></span>
                            </button>

                            <input 
                                className="task-page__input" 
                                type="text" 
                                placeholder="Название задачи"
                                value={subDeskName}
                                onChange={(e) => {setsubDeskName(e.target.value)}}
                                onKeyDown={(e) => {
                                    if (e.keyCode === 13) {
                                        {deskList.deskList.map((desk: IDesk) => {
                                            if (desk.id === Number(params.taskId)) {
                                                const newSubDeskArray = {name: subDeskName, taskArray: []};
                                                desk.array = [...desk.array, newSubDeskArray]
                                                setsubDeskName('')
                                            }
                                        })}
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
                                if(desk.id === Number(params.taskId)) {
                                    return(
                                        desk.array.map((deskItem: ISubTaskArray) => {
                                            return(
                                                <li className="task-page__task-name-item" key={desk.id}>
                                                    <>
                                                        <h2>{deskItem.name}</h2>
                                                            <input 
                                                                type="text"
                                                                value={taskName}
                                                                onChange={(e) => {
                                                                    setTaskName(e.target.value); 
                                                                    setNameArray(e.target.value);  
                                                                }}
                                                                onKeyDown={(e) => {
                                                                    if(e.keyCode === 13 && e.currentTarget) {
                                                                        setNameArray(taskName);
                                                                        deskItem.taskArray = [...deskItem.taskArray, nameArray];
                                                                        setNameArray('');
                                                                    }
                                                                }}
                                                            />                                                  
                                                        {
                                                            deskItem.taskArray.map((item: string, index) => {
                                                                return <div className="task-page__task" key={index}>{item}</div> 
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