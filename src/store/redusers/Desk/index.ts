import { SubDeskType } from "../../../type"

const initialState: any = {
    subDeskArray: [],
}

export const subDeskReduser = (state = initialState, action: any): any => {
    switch(action.type) {
        case SubDeskType.ADD_SUB_DESK:
            return {...state, subDeskArray: action.payload}
        case SubDeskType.REMOVE_SUB_DESK:
            return {subDeskArray: action.payload}
        default:
            return state
    }
}