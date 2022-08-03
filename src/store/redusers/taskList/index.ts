import { ITaskList, UserListAction } from "../../../type";

const initialState: ITaskList = {
    taskList: [],
}

export const taskListReduser = (state = initialState, action: any): ITaskList => {
    switch(action.type) {
        case UserListAction.ADD_TASK:
            return {...state, taskList: action.payload}
        default:
            return state
    }
}