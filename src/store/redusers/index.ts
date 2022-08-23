import { combineReducers } from "redux";

import { TaskCardListReduser } from "./TaskCardList";
import { deskListReduser } from "./TaskList";

export const rootReduser = combineReducers({
    desk: deskListReduser,
    taskCardList: TaskCardListReduser,
})

export type RootState = ReturnType<typeof rootReduser>;

