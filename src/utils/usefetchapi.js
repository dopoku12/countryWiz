import axios from "axios";
import { useEffect, useState, } from "react";
import useDebounce from "./usedebounce";
const useFetchApi = (name, submit) => {
    const [data, setData] = useState([]);
    const [pending, setPending] = useState(true);
    const [error, setErrorHandler] = useState(null);
    let count = 0
    let { debounceValue } = useDebounce(name)
    console.log('debounceValue:', debounceValue, count++);
    useEffect(() => {
        const fetchApi = async () => {
            try {
                const res = await axios.get(`https://restcountries.com/v2/name/ghana`)
                if (res && res.data) {
                    setPending(false)
                    setData(res.data)
                }
            }
            catch (err) {
                if (err.res) {
                    console.log('errorResData:', err.res.data);
                    console.log('errorResStatus:', err.res.status);
                    console.log('errorResHeader:', err.res.header);
                }
                else {
                    console.log(`Error: ${err.message}`);
                    setErrorHandler(err.message)
                }
            }
        }
        fetchApi()
    }, [debounceValue]
    );

    return { data, error, pending };
}
export default useFetchApi;