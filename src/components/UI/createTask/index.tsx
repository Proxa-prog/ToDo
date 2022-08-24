import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { UserListAction } from '../../../type';
import { getDeskList } from '../../../thunk/desk';


import CreateNewDesk from '../createNewDesk';

import './style.scss';

const CreateTask = () => {
    const [name, setName] = useState(true);
    const dispatch = useDispatch();

    const updateTaskList = (storage: any) => {
        if (storage !== null) {
            const stateFromLocalStorage = JSON.parse(storage);
            dispatch({ type: UserListAction.ADD_STORE_IN_LOCAL_STORAGE, payload: stateFromLocalStorage });
        }
    }

    useEffect(() => {
        updateTaskList(window.localStorage.getItem('addDesk'));
         // @ts-ignore:next-line
         dispatch(getDeskList());
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
