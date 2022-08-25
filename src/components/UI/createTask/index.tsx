import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { UserListAction } from '../../../type';
import { getDeskList } from '../../../thunk/desk';


import CreateNewDesk from '../createNewDesk';

import './style.scss';
import { getTaskCard } from '../../../thunk/taskCard';

const CreateTask = () => {
    const [name, setName] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        // @ts-ignore:next-line
         dispatch(getTaskCard());
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
