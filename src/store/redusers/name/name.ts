import { INameAction, INameArray, nameArrayAction } from "../../../type";

const initialState: INameArray = {
    nameArray: [],
}

export const nameReduser = (state = initialState, action: INameAction) => {
    switch(action.type) {
        // case nameArrayAction.ADD_NAME:
        //     return {...state, nameArray: [...state, ]}
        // case nameArrayAction.REMOVE_NAME:
        //     return {id: state.id - 1}
        // default:
            // return state;
    }
}