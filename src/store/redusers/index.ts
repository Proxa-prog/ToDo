import { combineReducers } from "redux";
import { idReduser } from "./id/idReduser";
import { subDesktopReduser } from "./subDesktop/name";
import { taskArrayReduser } from "./taskArray";
import { deskListReduser } from "./taskList";
import { nameReduser } from "./taskName/taskName";

export const rootReduser = combineReducers({
    id: idReduser,
    desk: deskListReduser,
    subDesktop: subDesktopReduser,
    name: nameReduser,
    subDeskArray: taskArrayReduser,
})

export type RootState = ReturnType<typeof rootReduser>;

