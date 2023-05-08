# 自定义 hook

useMount

```tsx
export const useMount = (callback) => {
  useEffect(() => {
    callback();
  }, []);
};
```

useDebounce 延迟输出

```tsx
export const useDebounce = (value, delay) => {
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
```
