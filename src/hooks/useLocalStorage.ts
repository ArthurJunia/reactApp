import type { FormInterface } from "@/types/FormType";
import { useState, useEffect } from "react";

export function getStorageValue(key: string) {
  const saved = localStorage.getItem(key);
  if (!saved) return [];
  try {
    return JSON.parse(saved);
  } catch {
    return [];
  }
}

export function setStorageValue<T>(key:string, defaultValue:  T): T {
  const saved = localStorage.getItem(key);
  if (saved) {
    return JSON.parse(saved);
  } else {
    localStorage.setItem(key, JSON.stringify(defaultValue));
    return defaultValue;
  }
}

export const useLocalStorage = (key:string, defaultValue:FormInterface) => {
  const [value, setValue] = useState(() => {
    return setStorageValue(key, defaultValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};