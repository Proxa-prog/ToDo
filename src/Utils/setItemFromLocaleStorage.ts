export const setItemFromLocaleStorage = (localStorageName: string, setItem: string) => {
    return window.localStorage.setItem(localStorageName, setItem);
};