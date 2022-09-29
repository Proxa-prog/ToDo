import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelectors } from '../../hooks/useTypedSelectors';
import { addDeskAction } from '../../store/redusers/TaskCardList';
import { addTaskAction } from '../../store/redusers/TaskList';

import { IDesk, ISubTaskArray } from '../../type';
import { setItemFromLocaleStorage } from '../../Utils/setItemFromLocaleStorage';
import { ColorListItem } from '../ColorListItem';
import { Button } from '../UI/Button';
import { Input } from '../UI/Input';

import './style.scss';

const CreateNewDesk = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const { deskList } = useTypedSelectors(state => state.desk);
    const { taskCard } = useTypedSelectors(state => state.taskCardList);
    const { list } = useTypedSelectors(state => state.colors);


    const createDesk = (desk: IDesk) => {
        dispatch(addTaskAction([...deskList, desk]));

        const newColorArray = list.filter((color) => color.isActive === true);

        const deskName = {
            name: desk.name,
            id: desk.id,
            isProgress: false,
            colorArray: newColorArray,
        }

        dispatch(addDeskAction([...taskCard, deskName]));
    };

    const addNewDesk = () => {
        const deskId = nanoid();
        const array: ISubTaskArray[] = [];
        createDesk({
            name,
            id: deskId,
            array,
            isProgress: false,
            colorArray: list,
        });
    };

    useEffect(() => {
        setItemFromLocaleStorage('addDesk', JSON.stringify(deskList));
        setItemFromLocaleStorage('taskCard', JSON.stringify(taskCard));
    }, [deskList, taskCard]);

    return (
        <div className='main__create-desk'>
            <label htmlFor="desk-name">Название доски</label>
            <Input
                className='main__input-desk-name'
                type="text"
                id='desk-name'
                value={name}
                onChange={(e) => { setName(e.target.value) }}
            />
            <Button
                className='main__add-desk'
                onClick={addNewDesk}
            >
                Добавить
            </Button>
            <Button
                className='main__cansel'
                onClick={() => { setName('') }}
            >
                Отмена
            </Button>
            <div className='main__color-selection-wrapper'>
                {list.length !== 0
                    ?
                    <p className='main__color-selection-text'>Наведите, чтобы прочитать</p>
                    :
                    <p className='main__color-selection-text'>Выберите цвет в настройках</p>
                }
                <ul className='main__color-list'>
                    {list.map((item) => (
                        <ColorListItem
                            item={item}
                            key={item.id}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default CreateNewDesk;