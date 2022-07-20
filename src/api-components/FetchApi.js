import { useEffect } from "react";

const useFetchApi = ({ name, status }) => {
    console.log(name);
    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${name}`)
            .then((res) => {
                return res.json()
            }).then((jsonData) => {
                console.log('json Data:', jsonData)
                const data = jsonData
            })



    }, [status])



}

export default useFetchApi;