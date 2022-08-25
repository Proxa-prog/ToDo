import { ColorType, IColor, IColorAction, IColorArray } from "../../../type";

const initialState: IColorArray = {
    list: [],
}

export const colorReduser = (state = initialState, action: IColorAction): IColorArray => {
    switch(action.type) {
        case ColorType.ADD_COLOR:
            return {...state, list: [...state.list, action.payload]}
        default:
            return state
    }
}

export const addColorAction = (payload: IColor) => ({type: ColorType.ADD_COLOR, payload})
