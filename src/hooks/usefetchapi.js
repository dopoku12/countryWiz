import axios from "axios";
import { useState, useEffect } from "react";
import useGeoLocation from "./usegeolocation"
const useFetchApi = (debounceValue, region) => {
    const [data, setData] = useState([]);
    const [pending, setPending] = useState(true);
    const [error, setErrorHandler] = useState(null);
    const { usrCountry } = useGeoLocation();

    let urlName = `https://restcountries.com/v3.1/name/ ${debounceValue}`;
    const isoName = `https://restcountries.com/v3.1/alpha/${usrCountry}`;
    const cont = `https://restcountries.com/v3.1/region/${region}`
    useEffect(() => {
        const countryApi = ((value = cont) => {

            let url = value
            return async () => {
                try {
                    const res = await axios.get(url)
                    if (res && res.data)
                        setPending(false);
                    setData(res.data)
                    console.log('axios', value);
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

        })(debounceValue ? urlName : cont)
        countryApi()
    }, [isoName, urlName, cont])
    return { data, pending, error };
}
export default useFetchApi;