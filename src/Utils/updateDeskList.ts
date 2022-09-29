import { UserListAction } from "../type";

export const updateDeskList = (storage: any, dispatch: any) => {
    if (storage !== null) {
        const stateFromLocalStorage = JSON.parse(storage);
        dispatch({ type: UserListAction.ADD_TASK, payload: stateFromLocalStorage });
    }
};