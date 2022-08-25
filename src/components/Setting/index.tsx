import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useTypedSelectors } from '../../hooks/useTypedSelectors';
import { addColorAction } from '../../store/redusers/Color';
import { IColor } from '../../type';

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
                <button
                    className="task-page__button-main"
                    onClick={() => { router(`/`) }}
                >
                    Главная
                </button>
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
                        list.map((item: IColor) => {
                            const colorId = nanoid();

                            return (
                                <li
                                    key={colorId}
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
                <button
                    onClick={() => {
                        dispatch(addColorAction({
                            color: newColor,
                            title: title,
                            id: params.taskId,
                        }))
                        getTitle('')
                    }}
                >Добавить</button>
            </div>
        </section>
    )
}