import { useEffect, useState } from "react";
const useDebounce = (name, delay = 700) => {

    const [debounceValue, setDebounceValue] = useState(name);
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounceValue(name)
        }, delay);
        //reset setTimeout once delay has passed
        return () => {
            clearTimeout(timer)
        };
    }, [name, delay]);
    return { debounceValue };
}
export default useDebounce;