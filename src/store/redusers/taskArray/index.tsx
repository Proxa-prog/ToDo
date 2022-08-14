import { ITaskArray, ITaskArrayAction, ITaskArrayType } from "../../../type"

const initialState: ITaskArray = {
    subDeskArray: [[]],
}

export const taskArrayReduser = (state = initialState, action: ITaskArrayAction): ITaskArray => {
    switch(action.type) {
        case ITaskArrayType.ADD_TASK_TYPE:
            return {...state, subDeskArray: action.payload}
        default:
            return state
    }
}