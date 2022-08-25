import { combineReducers } from "redux";
import { colorReduser } from "./Color";

import { TaskCardListReduser } from "./TaskCardList";
import { deskListReduser } from "./TaskList";

export const rootReduser = combineReducers({
    desk: deskListReduser,
    taskCardList: TaskCardListReduser,
    colors: colorReduser,
})

export type RootState = ReturnType<typeof rootReduser>;

