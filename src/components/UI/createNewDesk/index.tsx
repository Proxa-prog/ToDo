import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelectors } from '../../../hooks/useTypedSelectors';

import { IDesk, ISubTaskArray, ITaskCardListType, UserListAction } from '../../../type';

import './style.scss';

const CreateNewDesk = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const { deskList } = useTypedSelectors(state => state.desk);
    const { taskCard } = useTypedSelectors(state => state.taskCardList);

    const createDesk = (desk: IDesk) => {
        dispatch({ type: UserListAction.ADD_TASK, payload: [...deskList, desk] });
        const deskName = {
            name: desk.name,
            id: desk.id
        }
        
        dispatch({ type: ITaskCardListType.ADD_DESK, payload: [...taskCard, deskName] });
    }

    useEffect(() => {
        window.localStorage.setItem('addDesk', JSON.stringify(deskList));
        window.localStorage.setItem('taskCard', JSON.stringify(taskCard));
    }, [deskList, taskCard]);

    return (
        <div className='main__create-desk'>
            <label htmlFor="desk-name">Название доски</label>
            <input
                className='main__input-desk-name'
                type="text"
                id='desk-name'
                value={name}
                onChange={(e) => { setName(e.target.value) }}
            />

            <button
                className='main__add-desk'
                onClick={() => {
                    const deskId = nanoid();
                    const array: ISubTaskArray[] = [];
                    createDesk({ name, id: deskId, array });
                }}
            >
                Добавить
            </button>

            <button
                className='main__cansel'
                onClick={() => { setName('') }}
            >
                Отмена
            </button>
        </div>
    );
}

export default CreateNewDesk;