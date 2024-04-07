export const nameKey = 'userName';

export const setUserName = (value: string) => {
  localStorage.setItem(nameKey, JSON.stringify(value));
};

export const getUserName = (key: string) =>
  JSON.parse(localStorage.getItem(key) as string);

export const deleteUserName = (key: string) => localStorage.removeItem(key);
