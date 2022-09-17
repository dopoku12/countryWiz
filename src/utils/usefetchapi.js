import axios from "axios";
import { useState, } from "react";
import useDebounce from "./usedebounce";
const useFetchApi = (name, submit) => {
    const [data, setData] = useState([]);
    const [pending, setPending] = useState(true);
    const [error, setErrorHandler] = useState(null);
    let { debounceValue } = useDebounce(name)
    const initialize = (data) => {
        setPending(false);
        setData(data);
    }
    const userInput = ((debounceValue) => {
        let value = debounceValue
        let url = `https://restcountries.com/v3.1/name`
        return async () => {
            try {
                const res = await axios.get(
                    // !value ? 
                    //`https://restcountries.com/v3.1/name/usa`:
                    url + '/' + value
                )
                if (res && res.data)
                    initialize(res.data)
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
    })(debounceValue)

    userInput()
    console.log('fetchData:', data);
    return { data, error, pending };
}
export default useFetchApi;