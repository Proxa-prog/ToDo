import { successAction } from "../store/redusers/TaskCardList";
import { addTaskAction } from "../store/redusers/TaskList";

export const getTaskCard = (payload: any) => async (dispatch: any) => {
    try {
        const getLocale = window.localStorage.getItem('addDesk');

        await new Promise((resolve, reject) => {
          setTimeout(resolve, 2000);
        });

        if (getLocale !== null) {
            const stateFromLocalStorage = JSON.parse(getLocale);
            console.log(stateFromLocalStorage)
            dispatch(addTaskAction(stateFromLocalStorage));
        }
    } catch(error) {
        console.error(error);
    }
}