import { IDeskAction, IDeskList, UserListAction } from "../../../type";

const initialState: IDeskList = {
    deskList: [],
}

export const deskListReduser = (state = initialState, action: IDeskAction): IDeskList => {
    switch(action.type) {
        case UserListAction.ADD_TASK:
            return {...state, deskList: action.payload}
        default:
            return state
    }
}