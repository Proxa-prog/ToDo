import { ColorType, IColor, IColorAction, IColorArray } from "../../../type";

const initialState: IColorArray = {
    colors: [],
}

export const colorReduser = (state = initialState, action: IColorAction): IColorArray => {
    switch(action.type) {
        case ColorType.ADD_COLOR:
            return {...state, colors: [...state.colors, action.payload]}
        default:
            return state
    }
}

export const addColorAction = (payload: IColor) => ({type: ColorType.ADD_COLOR, payload})
