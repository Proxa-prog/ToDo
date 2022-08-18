import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelectors } from '../../../hooks/useTypedSelectors';

import { IdAction, IDesk, ISubTaskArray, UserListAction } from '../../../type';

import './style.scss';

const CreateNewDesk = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const { deskList } = useTypedSelectors(state => state.desk);

    const updateDeskList = (storage: any) => {
        if (storage !== null) {
            const stateFromLocalStorage = JSON.parse(storage);
            dispatch({ type: UserListAction.ADD_STORE_IN_LOCAL_STORAGE, payload: stateFromLocalStorage });
        }
    }
    
    const createDesk = (desk: IDesk) => {
        dispatch({ type: UserListAction.ADD_TASK, payload: [...deskList, desk] });
    }

    useEffect(() => {
        updateDeskList(window.localStorage.getItem('addDesk'));
    }, []);

    useEffect(() => {
        window.localStorage.setItem('addDesk', JSON.stringify(deskList));
    }, [deskList]);

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