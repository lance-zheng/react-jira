import { useEffect, useState } from "react";

export const isFalsy = (value: unknown) => (value === 0 ? false : !value);

export const cleanObject = (obj: object) => {
  const result = { ...obj };

  Object.keys(obj).forEach((key) => {
    // @ts-ignore
    if (isFalsy(obj[key])) {
      // @ts-ignore
      delete result[key];
    }
  });

  return result;
};

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

export const useDebounce = <T>(value: T, delay?: number): T => {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const timeout = setTimeout(() => setDebounceValue(value), delay);
    return () => {
      // 下一次运行的时候会清理上一次的 timeout
      clearTimeout(timeout);
    };
  }, [value, delay]);

  return debounceValue;
};
