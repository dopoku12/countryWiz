import { useEffect, useState } from "react";
const useFetchApi = (name, submit) => {
    const [data, setData] = useState(null)
    const [pending, setPending] = useState(true)
    const [errorHandler, setErrorHandler] = useState(null)
    const save = localStorage.setItem('countryData', data)
    useEffect(
        () => {
            fetch(`https://restcountries.com/v3/name/${name}`)
                .then(res => {
                    if (!res.ok) {
                        throw Error('Enter Country Name')
                    }
                    return res.json()
                })
                .then(jsonData => {
                    setData(jsonData)
                    setPending(false)
                })
                .catch(err => {
                    setErrorHandler(err.message)
                })
        }, [submit]);

    console.log('setData:', data);

    return { data, errorHandler, pending, save }
}

export default useFetchApi;