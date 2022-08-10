import { IAction, INameArrays, NameArrayAction } from "../../../type"

const initialState: INameArrays = {
    array: [],
}

export const nameReduser = (state = initialState, action: IAction): INameArrays => {
    switch(action.type) {
        
        case NameArrayAction.ADD_TASK_NAME:
            return {...state, array: action.payload}
        default:
            return state
    }
}