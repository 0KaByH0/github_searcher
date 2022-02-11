import React from 'react';

const DEBOUNCE_TIME = 500;

export const useDebounce = (value: string, delay: number = DEBOUNCE_TIME) => {
  const [debouncedValue, setDebouncedValue] = React.useState(value);

  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
};
