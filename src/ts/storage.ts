export const nameKey = 'userName';

export const setUserName = (value: string) => {
  localStorage.setItem(nameKey, JSON.stringify(value));
};

export const getUserName = () =>
  JSON.parse(localStorage.getItem(nameKey) as string);
