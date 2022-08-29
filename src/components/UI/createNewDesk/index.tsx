import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelectors } from '../../../hooks/useTypedSelectors';
import { addDeskAction } from '../../../store/redusers/TaskCardList';
import { addTaskAction } from '../../../store/redusers/TaskList';

import { IDesk, ISubTaskArray } from '../../../type';
import { ColorListItem } from '../ColorListItem';

import './style.scss';

const CreateNewDesk = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const { deskList } = useTypedSelectors(state => state.desk);
    const { taskCard } = useTypedSelectors(state => state.taskCardList);
    const { list } = useTypedSelectors(state => state.colors);


    const createDesk = (desk: IDesk) => {
        dispatch(addTaskAction([...deskList, desk]));
        const deskName = {
            name: desk.name,
            id: desk.id,
            isProgress: false,
        }

        dispatch(addDeskAction([...taskCard, deskName]));
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
                    createDesk({
                        name,
                        id: deskId,
                        array,
                        isProgress: false,
                    });
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
            <div className='main__color-selection-wrapper'>
                <p className='main__color-selection-text'>Выбирите цвет подсказки</p>
                <ul className='main__color-list'>
                    {list.map((item) => (
                        <ColorListItem item={item}/>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default CreateNewDesk;