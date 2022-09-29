import axios from "axios";
import { useState, useEffect } from "react";
import useGeoLocation from "./usegeolocation"
const useFetchApi = (debounceValue) => {
    const [data, setData] = useState([]);
    const [pending, setPending] = useState(true);
    const [error, setErrorHandler] = useState(null);
    const { usrCountry } = useGeoLocation();

    let urlName = `https://restcountries.com/v3.1/name` + '/' + debounceValue
    const isoName = `https://restcountries.com/v3.1/alpha` + '/' + usrCountry

    useEffect(() => {
        const countryApi = ((value) => {
            let url = value
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

        })(debounceValue ? urlName : isoName)
        countryApi()

    }, [debounceValue, usrCountry])
    return { data, error, pending };
}
export default useFetchApi;