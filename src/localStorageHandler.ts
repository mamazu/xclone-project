export const loadState = (key: string): string | null => {
    return localStorage.getItem(key);
};

export const saveState = (key: string, state: string): void => {
    localStorage.setItem(key, state);
}