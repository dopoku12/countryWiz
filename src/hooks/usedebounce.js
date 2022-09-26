import { useEffect, useState } from "react";

const useDebounce = (value, delay = 1000) => {
    const [debounceValue, setDebounceValue] = useState(value);
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounceValue(value)
        }, delay);

        return () => {
            clearTimeout(timer)
        }
    }, [value, delay]
    );
    console.log('name:', debounceValue)
    return { debounceValue };
}

export default useDebounce;