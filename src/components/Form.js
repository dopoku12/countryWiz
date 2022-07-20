import { useEffect } from "react";
import useFetchApi from "../api-components/FetchApi";
const Form = ({ SearchIcon, clickHandler }) => {
    const [name, setName] = useEffect('')
    const [status, setStatus] = useEffect(false)


    console.log('status:', status);
    useFetchApi(name, status)
    console.log('name:', name.current);
    return (
        <form className="landing-page-form">
            <button type="button">
                <SearchIcon className="search-icon" color='F47D2F' size={15} />
            </button>

            <input type="search" id="search-box"
                placeholder="Enter Country..."
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