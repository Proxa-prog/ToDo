import { nanoid } from "nanoid";
import { IDesk, UserListAction } from "../type";

export const onKeyDownCreateSubDesk = (
  event: React.KeyboardEvent<HTMLElement>,
  subDeskName: string,
  deskList: IDesk[],
  params: any,
  setsubDeskName: any,
  dispatch: any
) => {
  if (event.keyCode === 13 && subDeskName !== "") {
    const newDeskList = deskList.map((desk: IDesk) => {
      if (desk.id === params.taskId) {
        const subDeskId = nanoid();
        const newSubDeskArray = {
          name: subDeskName,
          taskArray: [],
          id: subDeskId,
        };
        desk.array = [...desk.array, newSubDeskArray];
        setsubDeskName("");
      }

      return desk;
    });
    dispatch({ type: UserListAction.ADD_TASK, payload: newDeskList });
  }
};
