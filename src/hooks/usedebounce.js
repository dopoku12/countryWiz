import { useEffect, useState } from "react";

const useDebounce = (value, delay = 1000) => {
    let [debounceValue, setDebounceValue] = useState(value);
    useEffect(() => {
        const timer = setTimeout(() => {
            console.log('set timeout');
            setDebounceValue(value)
        }, delay);

        return () => {
            console.log('clear timeout');
            clearTimeout(timer)
        }
    }, [value, delay]
    );
    return { debounceValue };
}

export default useDebounce;