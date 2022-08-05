import { IAction, INameArrays, NameArrayAction } from "../../../type"

const initialState: INameArrays = {
    name: [],
}

export const nameReduser = (state = initialState, action: IAction): INameArrays => {
    switch(action.type) {
        
        case NameArrayAction.ADD_TASK_NAME:
            return {...state, name: action.payload}
        default:
            return state
    }
}