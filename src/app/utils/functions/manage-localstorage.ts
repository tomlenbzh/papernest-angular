export const setTolocalstorage = (key: string, value: any): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getFromlocalstorage = (key: string): string | null => {
  return localStorage.getItem(key);
};
