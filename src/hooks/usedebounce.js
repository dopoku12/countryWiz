import { useEffect, useState } from "react";
const useDebounce = (name, delay = 400) => {
    console.log('debounce:', name, delay);
    const [debounceValue, setDebounceValue] = useState(name);
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounceValue(name)
        }, delay);

        return () => {
            clearTimeout(timer)
        };
    }, [name, delay]);
    return { debounceValue };
}
export default useDebounce;