import { useState } from "react";

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const local = window.localStorage.getItem(key);
    return local ? JSON.parse(local) : initialValue;
  });

  const setStatus = (status) => {
    setValue(status);
    window.localStorage.setItem(key, JSON.stringify(status));
  };

  return [value, setStatus];
}
