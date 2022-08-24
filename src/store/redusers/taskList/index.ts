import { IDeskAction, IDeskList, UserListAction } from "../../../type";

const initialState: IDeskList = {
    deskList: [],
}

export const deskListReduser = (state = initialState, action: IDeskAction): IDeskList => {
    switch(action.type) {
        case UserListAction.ADD_TASK:
            return {...state, deskList: action.payload}
        case UserListAction.REMOVE_TASK:
            return {deskList: action.payload}
        case UserListAction.COMPLETE:
            return {deskList: action.payload}
        case UserListAction.REMOVE_SUB_DESK:
            return {deskList: action.payload}
        case UserListAction.ADD_STORE_IN_LOCAL_STORAGE:
            return {deskList: action.payload}
        default:
            return state
    }
}

export const addTaskAction = (payload: any) => ({type: UserListAction.ADD_TASK, payload})
export const remoeveTaskAction = (payload: any) => ({type: UserListAction.REMOVE_TASK, payload})