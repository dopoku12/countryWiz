import * as React from 'react';

function compareValues(val1) {
  return (val2) => {
    console.log(val1, val2);
    const match = val1 === val2;

    return match ? val1 : null;
  };
}

export const useDebounce = (value, delay = 1000) => {
  const [debouncedValue, setDebouncedValue] = React.useState(null);
  const [debouncedTime, setDebouncedTime] = React.useState(null);

  React.useEffect(() => {
    const compare = compareValues(value);

    const timeoutId = setTimeout(() => {
      const result = compare(value);

      if (result) {
        setDebouncedValue(result);
        setDebouncedTime(new Date().toISOString().slice(11, 19));
      }
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      setDebouncedValue(null);
    };
  }, [value, delay]);

  return [debouncedValue, debouncedTime];
};
