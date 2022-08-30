import { ColorTypeAction, IColor, IColorAction, IColorArray } from "../../../type";

const initialState: IColorArray = {
    list: [],
}

export const colorReduser = (state = initialState, action: IColorAction): IColorArray => {
    switch(action.type) {
        case ColorTypeAction.ADD_COLOR:
            return {...state, list: [...action.payload]}
        case ColorTypeAction.UPDATE_COLOR:
            return {list: [...action.payload]}
        default:
            return state
    }
}

export const addColorAction = (payload: IColor[]) => ({type: ColorTypeAction.ADD_COLOR, payload})
export const updateColorAction = (payload: IColor[]) => ({type: ColorTypeAction.UPDATE_COLOR, payload})
