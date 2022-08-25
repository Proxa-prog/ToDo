import { addDeskAction, successAction } from "../store/redusers/TaskCardList";

export const getDeskList = (payload: any) => async (dispatch: any) => {
        try {
            const newLocale = window.localStorage.getItem('taskCard');

            await new Promise((resolve, reject) => {
              setTimeout(resolve, 2000);
            });

            if (newLocale !== null) {
                const stateFromLocalStorage = JSON.parse(newLocale);
                dispatch(successAction());
                dispatch(addDeskAction(stateFromLocalStorage));
            }
        } catch(error) {
            console.error(error);
        }
    }