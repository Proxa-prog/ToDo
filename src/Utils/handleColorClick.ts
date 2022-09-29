import { addColorAction } from "../store/redusers/Color";
import { IColor } from "../type";

export const handleColorClick = (e: HTMLLIElement, list: IColor[], dispatch: any) => {
    const changeIsActive = list.map((color) => {
        if (color.id === e.id) {
            color.isActive = !color.isActive;

            return color
        }

        return color
    })
    dispatch(addColorAction(changeIsActive))
};