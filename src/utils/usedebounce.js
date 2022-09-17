import { useEffect, useState } from "react";

const useDebounce = (value, delay = 600) => {
    let [debounceValue, setDebounceValue] = useState(value);
    useEffect(() => {
        const handler = setTimeout(() => {
            console.log('set timeout');
            setDebounceValue(value)
        }, delay);

        return () => {
            console.log('clear timeout');
            clearTimeout(handler)
        }
    }, [value, delay]
    );
    return { debounceValue };
}

export default useDebounce;