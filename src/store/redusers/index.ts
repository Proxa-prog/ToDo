import { combineReducers } from "redux";
import { idReduser } from "./id/idReduser";
import { taskArrayReduser } from "./taskArray";
import { deskListReduser } from "./taskList";

export const rootReduser = combineReducers({
    id: idReduser,
    desk: deskListReduser,
    subDeskArray: taskArrayReduser,
})

export type RootState = ReturnType<typeof rootReduser>;

