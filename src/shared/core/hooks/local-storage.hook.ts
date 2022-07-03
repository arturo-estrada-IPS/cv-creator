import { Dispatch, SetStateAction, useEffect, useState } from "react";

type ReturnType<T> = [T | undefined, Dispatch<SetStateAction<T | undefined>>];

const isJsonParsable = (str: string): boolean => {
  try {
    JSON.parse(str);
  } catch {
    return false;
  }
  return true;
};

export const useLocalStorage = <T>(
  key: string,
  initialValue?: T
): ReturnType<T> => {
  const [state, setState] = useState<T | undefined>(() => {
    if (typeof window === "undefined") return;
    try {
      const value = localStorage.getItem(key);
      return value
        ? isJsonParsable(value)
          ? JSON.parse(value)
          : value
        : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  useEffect(() => {
    if (state) {
      try {
        localStorage.setItem(key, JSON.stringify(state));
      } catch (error) {
        console.error(error);
      }
    }
  }, [state, key]);

  return [state, setState];
};
