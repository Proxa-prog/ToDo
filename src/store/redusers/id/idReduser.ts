import { IdAction, IId, IStateId } from "../../../type"

const initialState: IStateId = {
    id: 1,
}

export const idReduser = (state = initialState, action: IId): IStateId => {
    switch(action.type) {
        case IdAction.ADD_ID:
            return {id: state.id + 1}
        case IdAction.REMOVE_ID:
            return {id: state.id - 1}
        default:
            return state;
    }
}