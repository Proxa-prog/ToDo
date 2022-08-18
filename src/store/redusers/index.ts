import { combineReducers } from "redux";
import { deskListReduser } from "./TaskList";

export const rootReduser = combineReducers({
    desk: deskListReduser,
})

export type RootState = ReturnType<typeof rootReduser>;

