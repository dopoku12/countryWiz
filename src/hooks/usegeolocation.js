import { useEffect, useState } from "react";

const useGeoLocation = () => {
    const [usrLocation, setUsrLocation] = useState({})

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) =>
                setUsrLocation({
                    long: position.coords.longitude,
                    lat: position.coords.latitude
                })
            ,
            (error) => console.log('error:', error)
        )
    }, [])
    return { usrLocation }
}

export default useGeoLocation;