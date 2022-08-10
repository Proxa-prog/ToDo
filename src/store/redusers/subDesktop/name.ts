import { INameAction, taskNameArrayAction } from "../../../type";

const initialState: any = {
    subDesktopArray: [],
}

export const subDesktopReduser = (state = initialState, action: INameAction): any => {
    switch(action.type) {
        case taskNameArrayAction.ADD_TASK_NAME:
            return {...state, subDesktopArray: action.payload}
        default:
            return state;
    }
}