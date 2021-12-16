const storageKey = "loggedUser";

const saveUser = (user) =>
  localStorage.setItem(storageKey, JSON.stringify(user));

const loadUser = () => JSON.parse(localStorage.getItem(storageKey));

const logoutUser = () => localStorage.removeItem(storageKey);

const toExport = {
  saveUser,
  loadUser,
  logoutUser,
};

export default toExport;
