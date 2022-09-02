import { nanoid } from 'nanoid';

import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { useTypedSelectors } from '../../hooks/useTypedSelectors';
import { addColorAction } from '../../store/redusers/Color';
import { IColor } from '../../type';
import { Button } from '../UI/Button';

import './style.scss';

export const Settings = () => {
    const router = useNavigate();
    const params = useParams();
    const dispatch = useDispatch();
    const [newColor, getNewColor] = useState('#ffffff');
    const [title, getTitle] = useState('');
    const { list } = useTypedSelectors(state => state.colors);

    useEffect(() => {
        window.localStorage.setItem('colorList', JSON.stringify(list));
    }, [list])

    return (
        <section className="settings">
            <div className='settings__button-back-wrapper'>
                <Button
                    className="task-page__button-main"
                    onClick={() => { router(`/`) }}
                >
                    Главная
                </Button>
            </div>

            <div
                className='settings__color-description'
            >
                <input
                    type="text"
                    value={title}
                    onChange={(e) => { getTitle(e.target.value) }}
                />
                <ul className='settings__colors-list'>
                    {
                        list.length !== 0
                            ?
                            list.map((item: IColor) => {
                                const colorKey = nanoid();

                                return (
                                    <li
                                        key={colorKey}
                                        className='settings__item'
                                    >
                                        <div
                                            className='settings__selected-color'
                                            style={{ backgroundColor: item.color }}
                                        ></div>
                                        {item.title}
                                    </li>
                                )
                            })
                            :
                            'Цвета не выбраны'
                    }
                </ul>
            </div>
            <div className='settings__get-color'>
                <div className='settings__color-selection'>
                    <input
                        type="color"
                        value={newColor}
                        onChange={(e) => { getNewColor(e.target.value) }}
                    />
                </div>
                <Button
                    className=''
                    onClick={() => {
                        const colorId = nanoid();
                        const setNewColor = {
                            color: newColor,
                            title: title,
                            id: colorId,
                            isActive: false,
                        };
                        const newArray = [...list, setNewColor];
                        dispatch(addColorAction(newArray));
                        getTitle('')
                    }}
                >Добавить
                </Button>
            </div>
        </section>
    )
}