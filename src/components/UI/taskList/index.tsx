import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useTypedSelectors } from '../../../hooks/useTypedSelectors';
import { addDeskAction, removeDeskAction } from '../../../store/redusers/TaskCardList';
import { remoeveTaskAction } from '../../../store/redusers/TaskList';
import { getDeskList } from '../../../thunk/desk';
import { IDesk } from '../../../type';

import './style.scss';

const TaskList = () => {
    const router = useNavigate();
    const dispatch = useDispatch();
    const { taskCard } = useTypedSelectors(state => state.taskCardList);
    const { deskList } = useTypedSelectors(state => state.desk);

    const removeDesk = (deskName: string) => {
        const newtaskCard = taskCard.filter((task) => deskName !== task.id);
        dispatch(removeDeskAction(newtaskCard));
        const newDeskList = deskList.filter((desk) => deskName !== desk.id);
        dispatch(remoeveTaskAction(newDeskList));
    }

    useEffect(() => {
        // @ts-ignore:next-line
        dispatch(getDeskList());
    }, []);

    useEffect(() => {
        window.localStorage.setItem('taskCard', JSON.stringify(taskCard));
    }, [taskCard]);

    return (
        <section className="main__task-list-wrapper">
            <ul className="main__task-list">
                {   
                    taskCard.length !== 0 ?
                    taskCard.map((desk: IDesk) => {
                        return (
                            <li className='main__task-item' key={desk.id}>
                                <button
                                    className='main__task-item-button'
                                    onClick={() => { router(`/${desk.id}`) }}
                                >
                                    {desk.name}
                                </button>
                                <button
                                    name={String(desk.id)}
                                    onClick={(e) => {
                                        removeDesk(e.currentTarget.name);
                                    }}
                                >Del
                                </button>
                            </li>
                        )
                    }
                    )
                    :
                    'Данные не готовы'
                }
            </ul>
        </section>
    );
}

export default TaskList;
