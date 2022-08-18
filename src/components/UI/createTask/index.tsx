import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelectors } from '../../../hooks/useTypedSelectors';
import { IdAction, UserListAction } from '../../../type';

import CreateNewDesk from '../createNewDesk';

import './style.scss';

const CreateTask = () => {
    const [name, setName] = useState(true);
    const dispatch = useDispatch();

    const updateDeskList = (storage: any) => {
        if (storage !== null) {
            const stateFromLocalStorage = JSON.parse(storage);
            dispatch({ type: UserListAction.ADD_STORE_IN_LOCAL_STORAGE, payload: stateFromLocalStorage });
        }
    }

    useEffect(() => {
        updateDeskList(window.localStorage.getItem('addDesk'));
    }, []);

    return (
        <div className='main__create-task'>
            <button
                className='main__new-desk'
                onClick={() => { setName(!name) }}
            >
                {name ? 'Новая доска' : 'Свернуть'}
            </button>
            {name ? null : <CreateNewDesk />}
        </div>
    );
}

export default CreateTask;
