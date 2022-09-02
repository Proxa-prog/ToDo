import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getDeskList } from '../../thunk/desk';

import CreateNewDesk from '../createNewDesk';

import './style.scss';
import { getTaskCard } from '../../thunk/taskCard';
import { Button } from '../UI/Button';

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
            <Button
                className='main__new-desk'
                onClick={
                    () => { setName(!name) }
                }
            >
                {name ? 'Новая доска' : 'Свернуть'}
            </Button>
            {name ? null : <CreateNewDesk />}
        </div>
    );
}

export default CreateTask;
