import { useEffect, useState } from "react";

const useFetchApi = (url, status) => {

    useEffect(
        () => {
            fetch(url)
                .then((res) => {
                    console.log('api:', res)
                    if (!res.ok) {
                        throw Error('Something went wrong please enter country Name')
                    }
                    // else if () {

                    // }
                    console.log('res.json:', res.json());
                    console.log('resTest:', res);
                    const data = res.json()
                    return data
                })
                .catch(err => {
                    console.error(err.message)

                })

        }, [status])



    // return { data, err }
}

export default useFetchApi;