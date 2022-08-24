import { ITaskCardList, ITaskCardListAction, ITaskCardListType } from "../../../type"

const initialState: ITaskCardList = {
    taskCard: [],
    isProgress: false,
}

export const TaskCardListReduser = (state = initialState, action: ITaskCardListAction): ITaskCardList => {
    switch(action.type) {
        case ITaskCardListType.ADD_DESK:
            return {...state, taskCard: action.payload}
        case ITaskCardListType.REMOVE_DESK:
            return {...state, taskCard: action.payload}
        case ITaskCardListType.GET_DESK_LIST_REQUEST:
            return {...state, isProgress: true}
        case ITaskCardListType.GET_DESK_LIST_SUCCESS:
            return {...state, isProgress: false}
        case ITaskCardListType.GET_DESK_LIST_ERROR:
            return {...state, isProgress: false}
        default:
            return state
    }
}

export const addDeskAction = (payload: any) => ({type: ITaskCardListType.ADD_DESK, payload})
export const removeDeskAction = (payload: any) => ({type: ITaskCardListType.REMOVE_DESK, payload})
