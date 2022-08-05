import { combineReducers } from "redux";
import { idReduser } from "./id/idReduser";
import { taskNameReduser } from "./name/name";
import { taskListReduser } from "./taskList";
import { nameReduser } from "./taskName/taskName";

export const rootReduser = combineReducers({
    id: idReduser,
    task: taskListReduser,
    taskName: taskNameReduser,
    name: nameReduser,
})

export type RootState = ReturnType<typeof rootReduser>;

