import { ITaskCardList, ITaskCardListAction, ITaskCardListType } from "../../../type"

const initialState: ITaskCardList = {
    taskCard: [],
}

export const TaskCardListReduser = (state = initialState, action: ITaskCardListAction): ITaskCardList => {
    switch(action.type) {
        case ITaskCardListType.ADD_DESK:
            return {...state, taskCard: action.payload}
        case ITaskCardListType.REMOVE_DESK:
            return {taskCard: action.payload}
        default:
            return state
    }
}