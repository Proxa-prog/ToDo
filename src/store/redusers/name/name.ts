import { INameAction, ITaskNameArray, taskNameArrayAction } from "../../../type";

const initialState: any = {
    taskNameArray: [],
}

export const taskNameReduser = (state = initialState, action: INameAction): any => {
    switch(action.type) {
        case taskNameArrayAction.ADD_TASK_NAME:
            return {...state, taskNameArray: action.payload}
        // case taskNameArrayAction.REMOVE_TASK_NAME:
        //     return {id: state.id - 1}
        default:
            return state;
    }
}