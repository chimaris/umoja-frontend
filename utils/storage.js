export const getLocalStorageItem = (key, defaultValue = null) => {
  try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
      console.error(`Error parsing local storage item for key "${key}":`, error);
      return defaultValue;
  }
};
  
  export const setLocalStorageItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  
  export const removeLocalStorageItem = (key) => {
    localStorage.removeItem(key);
  };