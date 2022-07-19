/**
 * Set an item in localstorage with a specific key.
 *
 * @param     { string }      key
 * @param     { any }         value
 */
export const setToLocalstorage = (key: string, value: any): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

/**
 * Returns an item from localstorage with a specific key.
 *
 * @param     { string }      key
 */
export const getFromlocalstorage = (key: string): string | null => {
  return localStorage.getItem(key);
};
