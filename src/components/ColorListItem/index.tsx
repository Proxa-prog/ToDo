import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelectors } from "../../hooks/useTypedSelectors";
import { addColorAction } from "../../store/redusers/Color";

import { IColor } from "../../type";

interface IColorListItem {
    item: IColor;
}

export const ColorListItem: FC<IColorListItem> = (props) => {
    const {
        item
    } = props;

    const dispatch = useDispatch();
    const { list } = useTypedSelectors(state => state.colors);


    const handleColorClick = (e: HTMLLIElement) => {
        const changeIsActive = list.map((color) => {
            if (color.id === e.id) {
                color.isActive = !color.isActive;

                return color
            }

            return color
        })
        dispatch(addColorAction(changeIsActive))
    }

    return (
        <li
            className='main__color-item'
            id={item.id}
            title={item.title}
            style={{
                backgroundColor: `${item.color}`,
                outline: `${item.isActive
                    ? '4px solid rgb(0, 212, 255)'
                    : 'none'}`,
                outlineOffset: `${item.isActive
                    ? '2px'
                    : 'none'}`,
            }}
            onClick={(e) => {
                handleColorClick(e.currentTarget)
            }}
        >
        </li>
    )
}