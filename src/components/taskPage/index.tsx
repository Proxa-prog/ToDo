import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useTypedSelectors } from "../../hooks/useTypedSelectors";
import { IDesk, ITaskArrayType, NameArrayAction, taskNameArrayAction } from "../../type";

import './style.scss';


const TaskPage = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const [open, setOpen] = useState(true);
    const [subDeskName, setsubDeskName] = useState('');
    const [taskName, setTaskName] = useState('');
    const [nameArray, setNameArray] = useState('');
    const deskList = useTypedSelectors(state => state.desk);
    const subDesktop = useTypedSelectors(state => state.subDesktop);
    const arrayState = useTypedSelectors(state => state.subDeskArray);
    // const taskArray = useTypedSelectors(state => state.array);


    // const addTaskInArray = (newArray: any) => {
    //     dispatch({type: ITaskArrayType.ADD_TASK_TYPE, payload: [...taskArray.array, newArray]});
    //   }
   
  
    const createNewTask = (newTask: any) => {
        dispatch({type: taskNameArrayAction.ADD_TASK_NAME, payload: [...subDesktop.subDesktopArray, newTask]})
    }

    const createNewArray = (newArray: any) => {
        dispatch({type: NameArrayAction.ADD_TASK_NAME, payload: [...arrayState.subDeskArray, newArray]})
        
    }
    return (
        <section className="task-page">
            <div className="task-page__inner">
                {deskList.deskList.map((desk: IDesk) => {
                    if (desk.id === Number(params.taskId)) {
                        return <h1 className="task-page__title" key={desk.id}>{desk.name}</h1>
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
                                        // createNewArray([]);
                                    }
                                }}
                            />
                        </div>
                    }
                </div>
                <div>
                    <ul className="task-page__task-name-list">
                        {
                            deskList.deskList.map((desk: any) => {
                                if(desk.id === Number(params.taskId)) {
                                    return(
                                        desk.array.map((deskItem: any) => {
                                            
                                            return(
                                                <li className="task-page__task-name-item" key={desk.id}>
                                                    <>
                                                        <h2>{deskItem.name}</h2>
                                                        <input 
                                                            type="text"
                                                            value={taskName}
                                                            onChange={(e) => {setTaskName(e.target.value); setNameArray(e.target.value)}}
                                                            onKeyDown={(e) => {
                                                                if(e.keyCode === 13) {
                                                                    setNameArray(taskName);
                                                                    deskItem.taskArray = [...deskItem.taskArray, nameArray];
                                                                    setNameArray('');
                                                                }
                                                            }}
                                                        />
                                                        {
                                                            deskItem.taskArray.map((item: any) => {
                                                                return <div className="task-page__task">{item}</div> 
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
                        {/* {   
                            subDesktop.subDesktopArray.map((desk: any, index: number) => {
                                
                                return (
                                <li className="task-page__task-name-item" key={desk}>
                                    <>
                                        <h2>{desk.name}</h2>
                                        <input 
                                            type="text"
                                            value={taskName}
                                            onChange={(e) => {setTaskName(e.target.value); setNameArray(e.target.value)}}
                                            onKeyDown={(e) => {
                                                if(e.keyCode === 13) {
                                                    arrayState.subDeskArray.map((item: any, indexName: any) => {
                                                        if(index === indexName && taskName !== '') {
                                                            setNameArray(taskName);
                                                            item = [...item, nameArray];
                                                            desk.taskArray =  [...desk.taskArray, nameArray];
                                                            setNameArray('');
                                                        }
                                                    })
                                                }
                                            }}
                                        />
                                        {
                                             desk.taskArray.map((item: any) => {
                                                //@ts-ignore
                                                return <div className="task-page__task" key={item}>{item}</div>
                                            })
                                        }
                                    </>
                                </li>
                                )
                            })
                        } */}
                    </ul>
                </div>
            </div>
        </section>  
    );
  }
  
  export default TaskPage;