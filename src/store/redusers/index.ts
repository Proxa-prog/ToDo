import { combineReducers } from "redux";
import { idReduser } from "./Id/idReduser";
import { deskListReduser } from "./TaskList";

export const rootReduser = combineReducers({
    id: idReduser,
    desk: deskListReduser,
})

export type RootState = ReturnType<typeof rootReduser>;

