import * as React from 'react';

/**
 * Curried function that takes two values, then compares
 * them for strict equality; might need deep equality
 * check, depending on the datatype, so don't consider
 * this a general comparison implementation. Pull in a
 * library for that if you need it.
 *
 * Returns the value on match, otherwise null.
 *
 * @returns value1 | null
 */
function compareValues(value1) {
  console.log('value1', value1);
  return (value2) => {
    console.log('value2', value2);
    return value1 === value2 ? value1 : null;
  };
}

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
    // preload the first value for our comparison
    const compare = compareValues(value);

    // set our timeout
    const timeoutId = setTimeout(() => {
      // check if value now matches value from before
      // this is _not_ the same value as above, as this one
      // will be checked in the future when setTimeout calls
      // its callback, which is this function
      const result = compare(value);

      // if the result is not a null, update our debounced value
      // and set the current time
      if (result !== null) {
        setDebouncedValue(result);
        setDebouncedTime(new Date().toISOString().slice(11, 19));
      }
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
