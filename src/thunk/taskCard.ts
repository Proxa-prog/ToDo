import { addTaskAction } from "../store/redusers/TaskList";

export const getTaskCard = (payload: any) => async (dispatch: any) => {
    try {
        const getLocaleTaskList = window.localStorage.getItem('addDesk');

        await new Promise((resolve, reject) => {
          setTimeout(resolve, 2000);
        });

        if (getLocaleTaskList !== null) {
            const stateFromLocalStorage = JSON.parse(getLocaleTaskList);
            dispatch(addTaskAction(stateFromLocalStorage));
        }
    } catch(error) {
        console.error(error);
    }
}