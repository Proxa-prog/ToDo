import { combineReducers } from "redux";
import { idReduser } from "./id/idReduser";
import { deskListReduser } from "./taskList";

export const rootReduser = combineReducers({
    id: idReduser,
    desk: deskListReduser,
})

export type RootState = ReturnType<typeof rootReduser>;

