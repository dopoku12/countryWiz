import { useState } from "react";
const Filter = ({ data, setName }) => {
    const [status, setStatus] = useState(true)
    const filterOptions = data.map(i => {
        function clickHandler() {
            setName(i.name.common)
            setStatus(false)
        }
        return (
            status &&
            <ul key={i.area}>
                <li className="options" onClick={clickHandler}>
                    <img className="filter-imgs" src={i.flags.svg}
                        alt="flag" />
                    <h3>
                        {i.name.common}
                    </h3>
                </li>
            </ul>
        )
    }
    );
    return filterOptions
}

export default Filter;