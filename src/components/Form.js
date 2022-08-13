import { useState } from "react";
import useFetchApi from "../customHooks/usefetchapi";
const Form = ({ SearchIcon }) => {
    const [name, setName] = useState('');
    const [submit, setSubmit] = useState(null);

    const url = `https://restcountries.com/v3/name/${name}`;

    function handleSubmit(e) {
        e.preventDefault()
        !submit ?
            setSubmit(true) :
            setSubmit(false)
    };

    useFetchApi(url, submit);
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