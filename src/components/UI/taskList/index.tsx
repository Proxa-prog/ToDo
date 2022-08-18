import { nanoid } from 'nanoid';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useTypedSelectors } from '../../../hooks/useTypedSelectors';
import { IdAction, IDesk, UserListAction } from '../../../type';

import './style.scss';

const TaskList = () => {
    const router = useNavigate();
    const dispatch = useDispatch();
    const { deskList } = useTypedSelectors(state => state.desk);

    const removeDesk = (deskName: string) => {
        const newDeskList = deskList.filter((desk) => deskName !== desk.id);
        dispatch({ type: UserListAction.REMOVE_TASK, payload: newDeskList });
    }

    const updateDeskList = (storage: any) => {
        if (storage !== null) {
            const stateFromLocalStorage = JSON.parse(storage);
            dispatch({ type: UserListAction.ADD_STORE_IN_LOCAL_STORAGE, payload: stateFromLocalStorage });
        }
    }

    useEffect(() => {
        updateDeskList(window.localStorage.getItem('addDesk'));
        const idFromLocalStorage = window.localStorage.getItem('deskId');
        if (idFromLocalStorage !== null) {
            const parseId = JSON.parse(idFromLocalStorage);
            dispatch({ type: IdAction.GET_ID, payload: parseId });
        }
    }, []);

    useEffect(() => {
        window.localStorage.setItem('addDesk', JSON.stringify(deskList));
    }, [deskList]);

    return (
        <section className="main__task-list-wrapper">
            <ul className="main__task-list">
                {
                    deskList.map((desk: IDesk) => {
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
