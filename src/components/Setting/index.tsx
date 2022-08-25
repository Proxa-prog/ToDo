import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTypedSelectors } from '../../hooks/useTypedSelectors';
import { addColorAction } from '../../store/redusers/Color';
import { IColor } from '../../type';

import './style.scss';

export const Setting = () => {
    const router = useNavigate();
    const dispatch = useDispatch();
    const [newColor, getNewColor] = useState('#ffffff');
    const [title, getTitle] = useState('');
    const { colors } = useTypedSelectors(state => state.colors);
    console.log(colors)
    return (
        <section className="setting">
            <div className='setting__button-back-wrapper'>
                <button
                    className="task-page__button-main"
                    onClick={() => { router(`/`) }}
                >
                    Главная
                </button>
            </div>

            <div
                className='setting__color-description'
            >
                <input
                    type="text"
                    value={title}
                    onChange={(e) => { getTitle(e.target.value) }}
                />
                <ul>
                    {
                        colors.map((item: IColor) => {
                            const colorId = nanoid();

                            return (
                                <li
                                    key={colorId}
                                    className='setting__item'
                                >
                                    <div
                                        className='setting__selected-color'
                                        style={{ backgroundColor: item.color }}
                                    ></div>
                                    {item.title}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div
                className='setting__get-color'
            >
                <div className='setting__color-selection'>
                    <input
                        type="color"
                        value={newColor}
                        onChange={(e) => { getNewColor(e.target.value) }}
                    />
                </div>
                <button
                    onClick={() => { 
                        dispatch(addColorAction({ color: newColor, title: title }))
                        getTitle('')
                    }}
                >Добавить</button>
            </div>
        </section>
    )
}