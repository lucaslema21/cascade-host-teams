const getFromStorage = (key) => {
    return localStorage.getItem(key);
  };
  
  const setInStorage = (key, value) => {
    return localStorage.setItem(key, value);
  };
  
  const removeFromStorage = (key) => {
    return localStorage.removeItem(key);
  };
  
  // localStorage wrapper that can be stubbed in tests
  const Storage = {
    get: getFromStorage,
    set: setInStorage,
    remove: removeFromStorage,
  };
  
  export default Storage;
  