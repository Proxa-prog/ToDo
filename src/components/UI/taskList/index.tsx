import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useTypedSelectors } from '../../../hooks/useTypedSelectors';
import { IDesk, ITaskCardListType } from '../../../type';

import './style.scss';

const TaskList = () => {
    const router = useNavigate();
    const dispatch = useDispatch();
    const { taskCard } = useTypedSelectors(state => state.taskCardList);

    const removeDesk = (deskName: string) => {
        const newDeskList = taskCard.filter((desk) => deskName !== desk.id);
        dispatch({ type: ITaskCardListType.ADD_DESK, payload: newDeskList });
    }

    const updateDeskList = (storage: any) => {
        if (storage !== null) {
            const stateFromLocalStorage = JSON.parse(storage);
            dispatch({ type: ITaskCardListType.ADD_DESK, payload: stateFromLocalStorage });
        }
    }

    useEffect(() => {
        updateDeskList(window.localStorage.getItem('taskCard'));
    }, []);

    useEffect(() => {
        window.localStorage.setItem('taskCard', JSON.stringify(taskCard));
    }, [taskCard]);

    return (
        <section className="main__task-list-wrapper">
            <ul className="main__task-list">
                {
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
                }
            </ul>
        </section>
    );
}

export default TaskList;
