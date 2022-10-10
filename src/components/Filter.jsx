import { useState } from "react";
const Filter = ({ data, setName, setSubmit }) => {
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
                    {i.name.common}
                </li>
            </ul>
        )
    }
    );
    return filterOptions
}

export default Filter;