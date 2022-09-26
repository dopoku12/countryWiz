import axios from "axios";
import { useState, useEffect } from "react";
import useGeoLocation from "./usegeolocation"
const useFetchApi = (debounceValue) => {
    const [data, setData] = useState([]);
    const [pending, setPending] = useState(true);
    const [error, setErrorHandler] = useState(null);
    const { usrCountry } = useGeoLocation();

    useEffect(() => {
        const countryApi = ((value) => {
            let input = value
            let urlName = `https://restcountries.com/v3.1/name`
            const url = urlName + '/' + input

            return async () => {
                try {
                    const res = await axios.get(url)
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
                        setErrorHandler(err.message);
                    }
                }
            }

        })(debounceValue ? debounceValue : usrCountry)
        countryApi()

    }, [debounceValue, usrCountry])
    return { data, error, pending };
}
export default useFetchApi;