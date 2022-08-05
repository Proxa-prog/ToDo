import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useTypedSelectors } from "../../hooks/useTypedSelectors";
import { IName, ITask, NameArrayAction, taskNameArrayAction } from "../../type";

import './style.scss';


const TaskPage = ({taskState}: any) => {
    const dispatch = useDispatch();
    const params = useParams();
    const [open, setOpen] = useState(true);
    const [name, setName] = useState('');
    const [taskName, setTaskName] = useState('');
    const taskNameState = useTypedSelectors(state => state.taskName);
    const nameState = useTypedSelectors(state => state.name);

    const createNewTask = (newTask: any) => {
        dispatch({type: taskNameArrayAction.ADD_TASK_NAME, payload: [...taskNameState.taskNameArray, newTask]})
    }

    const createNewName = (newName: any) => {
        dispatch({type: NameArrayAction.ADD_TASK_NAME, payload: [...nameState.name, newName]})
        
    }

    return (
        <section className="task-page">
            <div className="task-page__inner">
                {taskState.map((task: ITask) => {
                    if (task.id === Number(params.taskId)) {
                        return <h1 className="task-page__title">{task.name}</h1>
                    }
                })}

                <div className="task-page__task-name"
                    onKeyDown={(e) => {
                        if (e.keyCode === 13) {
                            createNewTask({name: name, taskArray: []});
                            createNewName([]);
                            console.log(nameState)
                        }
                    }}
                >
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
                                value={name}
                                onChange={(e) => {setName(e.target.value)}}
                            />
                        </div>
                    }
                    
                </div>
                <div>
                    <ul className="task-page__task-name-list">
                        {   
                            taskNameState.taskNameArray.map((task: any) => {
                                
                                return (
                                <li className="task-page__task-name-item" key={task}>
                                    <>
                                        <h2>{task.name}</h2>
                                        <input 
                                            type="text"
                                            value={taskName}
                                            onChange={(e) => {setTaskName(e.target.value)}}
                                            onKeyDown={(e) => {
                                                if(e.keyCode === 13) {
                                                    task.taskArray.push(taskName);
                                                    console.log(task)
                                                }
                                            }}
                                        />
                                        {
                                             task.taskArray.map((item: any) => {
                                                //@ts-ignore
                                                return <div className="task-page__task">{item}</div>
                                            })
                                        }
                                    </>
                                  
                                </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </section>  
    );
  }
  
  export default TaskPage;