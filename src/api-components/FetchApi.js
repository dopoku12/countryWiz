import { useEffect } from "react";

const FetchApi = ({ value }) => {
    console.log(value);
    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${value}`)
            .then((res) => {
                return res.json()
            }).then((json) => {
                console.log('json Data:', json)
            })



    }, [])



}

export default FetchApi;