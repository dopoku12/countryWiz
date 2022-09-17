import * as React from 'react';

export const useDebounce = (value, delay = 1000) => {
  // debouncedValue is the value when we've finished waiting and
  // fired off our call to get result
  const [debouncedValue, setDebouncedValue] = React.useState(null);
  // debouncedTime is just the time that the debounce returns or null
  // it is not necessary for the implementation and provided here
  // to illustrate a point
  const [debouncedTime, setDebouncedTime] = React.useState(null);

  // useEffects get called when their dependencies change or whatever
  React.useEffect(() => {
    // set our timeout
    const timeoutId = setTimeout(() => {
      // do this when the timeout fires
      setDebouncedValue(value);
      setDebouncedTime(new Date().toISOString().slice(11, 19));
    }, delay);

    // return callback to reset our timeouts next time useEffect is called
    return () => {
      // clear our timeout
      clearTimeout(timeoutId);
      // clear our debounced value
      setDebouncedValue(null);
    };
  }, [value, delay]);

  // return tuple with debouncedValue and debouncedTime
  return [debouncedValue, debouncedTime];
};
