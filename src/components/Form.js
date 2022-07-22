import { useEffect, useState } from "react";
import useFetchApi from "../customHooks/FetchApi";
const Form = ({ SearchIcon, clickHandler }) => {
    const [name, setName] = useState('');
    const [status, setStatus] = useState(false)
    const url = `https://restcountries.com/v3/name/${name}`


    function handleSubmit(e) {
        e.preventDefault()
        !status ?
            setStatus(true) :
            setStatus(false)

        console.log('name:', name);
    }
    useFetchApi(url, status)

    return (
        <form className="landing-page-form" onSubmit={handleSubmit}>
            <button>
                <SearchIcon
                    type="submit"
                    className="search-icon"
                    color='F47D2F'
                    size={15}
                />
            </button>

            <input type="search" id="search-box"
                placeholder=''
                value={name}
                onChange={
                    (e) =>
                        setName(e.target.value)
                }
            />
        </form>
    );
}

export default Form;