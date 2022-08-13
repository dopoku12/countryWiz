import { useEffect, useState } from "react";

const useFetchApi = (url, submit) => {
    const [data, setData] = useState([]);
    const [pending, setPending] = useState(true);
    const [errorHandler, setErrorHandler] = useState(null);
    useEffect(
        () => {
            fetch(url)
                .then(res => {

                    console.log(url);
                    if (!res.ok) {
                        throw Error('Enter Country Name');
                    }
                    return res.json();

                }
                )
                .then(jsonData => {

                    setData(jsonData)
                    setPending(false);

                })
                .catch(err => {
                    setErrorHandler(err.message);
                })
        }, [url]
    );
    console.log('fetch:', data);
    return { data, errorHandler, pending };
}
export default useFetchApi;