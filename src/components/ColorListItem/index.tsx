import { FC } from "react";
import { useDispatch } from "react-redux";

import { useTypedSelectors } from "../../hooks/useTypedSelectors";

import { IColor } from "../../type";
import { handleColorClick } from "../../Utils/handleColorClick";

interface IColorListItem {
    item: IColor;
}

export const ColorListItem: FC<IColorListItem> = (props) => {
    const {
        item
    } = props;

    const dispatch = useDispatch();
    const { list } = useTypedSelectors(state => state.colors);

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
                handleColorClick(e.currentTarget, list, dispatch)
            }}
        >
        </li>
    )
}