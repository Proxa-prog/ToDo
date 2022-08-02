import { combineReducers } from "redux";
import { idReduser } from "./id/idReduser";

export const rootReduser = combineReducers({
    id: idReduser,
})

export type RootState = ReturnType<typeof rootReduser>;

