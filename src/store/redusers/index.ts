import { combineReducers } from "redux";
import { idReduser } from "./id/idReduser";
import { taskListReduser } from "./taskList";

export const rootReduser = combineReducers({
    id: idReduser,
    task: taskListReduser,
})

export type RootState = ReturnType<typeof rootReduser>;

