import { addColorAction } from "../store/redusers/Color";
import { addDeskAction, successAction } from "../store/redusers/TaskCardList";
import { getItemFromLocaleStorage } from "../Utils/getItemFromLocaleStorage";

export const getDeskList = (payload: any) => async (dispatch: any) => {
        try {
            const newLocale = getItemFromLocaleStorage('taskCard');
            const getLocaleColorsList = getItemFromLocaleStorage('colorList');

            await new Promise((resolve, reject) => {
              setTimeout(resolve, 2000);
            });

            if (getLocaleColorsList !== null) {
                const colorsList = JSON.parse(getLocaleColorsList);
                dispatch(addColorAction(colorsList));
            }

            if (newLocale !== null) {
                const stateFromLocalStorage = JSON.parse(newLocale);
                dispatch(successAction());
                dispatch(addDeskAction(stateFromLocalStorage));
            }
        } catch(error) {
            console.error(error);
        }
    }