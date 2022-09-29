import { nanoid } from "nanoid";
import { ColorTypeAction, IColor } from "../type";

export const onClickSetColor = (
  newColor: string,
  title: string,
  list: IColor[],
  dispatch: any,
  addColorAction: (payload: IColor[]) => {
    type: ColorTypeAction;
    payload: IColor[];
},
  getTitle: React.Dispatch<React.SetStateAction<string>>
) => {
  const colorId = nanoid();
  const setNewColor = {
    color: newColor,
    title: title,
    id: colorId,
    isActive: false,
  };
  const newArray = [...list, setNewColor];
  
  dispatch(addColorAction(newArray));
  getTitle("");
};
