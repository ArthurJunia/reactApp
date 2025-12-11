import type { FormInterface } from "@/types/FormType";
import { useState, useEffect } from "react";

export function getStorageValue(key:string) {
  return localStorage.getItem(key);
}

export function setStorageValue(key:string, defaultValue:FormInterface) {
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