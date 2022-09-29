export const getItemFromLocaleStorage = (localStorageName: string) => {
    return window.localStorage.getItem(localStorageName);
};