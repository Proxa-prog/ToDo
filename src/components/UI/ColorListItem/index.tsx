import { FC } from "react";

import { IColor } from "../../../type";

interface IColorListItem {
    item: IColor;
}

export const ColorListItem: FC<IColorListItem> = (props) => {
    const {
        item
    } =  props;
    
    return (
        <li
            key={item.id}
            className='main__color-item'
            onClick={() => {}}
        >
            <div
                className='main__color'
                style={{ backgroundColor: `${item.color}` }}
            ></div>
        </li>
    )
}