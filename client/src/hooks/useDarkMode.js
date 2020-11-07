import { useLocalStorage } from "./useLocalStorage";

export function useDarkMode(value) {
  const [status, setStatus] = useLocalStorage("dark-mode", value);
  return [status, setStatus];
}
