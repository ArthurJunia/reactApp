import type { FormInterface } from "@/types/FormType";
import { useState, useEffect } from "react";

export function getStorageValue(key:string, defaultValue:FormInterface) {
  const saved = localStorage.getItem(key);
  const initial = saved ? JSON.parse(saved) : null;
  return initial || defaultValue;
}

export const useLocalStorage = (key:string, defaultValue:FormInterface) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};