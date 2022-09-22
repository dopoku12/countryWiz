import axios from "axios";
import { useState, } from "react";

const useFetchApi = (debounceValue, submit) => {
    const [data, setData] = useState([]);
    const [pending, setPending] = useState(true);
    const [error, setErrorHandler] = useState(null);

    const countryApi = ((value) => {
        let usrInput = value
        let url = `https://restcountries.com/v3.1/name`
        return async () => {
            try {
                const res = await axios.get(
                    // !value ? 
                    //`https://restcountries.com/v3.1/name/usa`:
                    url + '/' + usrInput
                )
                if (res && res.data)
                    setPending(false);
                setData(res.data);
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
    countryApi()
    console.log("data:", data);
    return { data, error, pending };
}
export default useFetchApi;