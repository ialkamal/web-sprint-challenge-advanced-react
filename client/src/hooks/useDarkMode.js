import { useLocalStorage } from "./useLocalStorage";

export function useDarkMode(value) {
  const [status, setStatus] = useLocalStorage("dark-mode", value);
  console.log("STATUS: ", value);
  return [status, setStatus];
}
