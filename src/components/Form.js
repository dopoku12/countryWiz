import { useState } from "react";
import useFetchApi from "../utils/usefetchapi";
const Form = ({ SearchIcon }) => {
    const [name, setName] = useState('')
    const [submit, setSubmit] = useState(null);
    useFetchApi(name, submit)
    function handleSubmit(e) {
        e.preventDefault()
        !submit ?
            setSubmit(true) :
            setSubmit(false);
    };
    return (
        <div>
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
                    onChange={(e) => setName(e.target.value)}
                />
            </form>
        </div>
    );
}

export default Form;