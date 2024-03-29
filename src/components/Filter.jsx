import { useState } from "react";
export const Filter = ({ data, setName, }) => {
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
                    <img className="filter-imgs"
                        src={i.flags.svg}
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

export const Options = ({ region, setRegion }) => {

    return (
        <div>
            <select id="countries"
                onChange={(e) => setRegion(e.target.value)}
                className="bg-inherit
                text-sm rounded-lg 
                bg-slate-200
               dark:bg-slate-800
             block w-full p-2.5">
                <option >Filter by Region</option>
                <option defaultValue={region}>Africa</option>
                <option value="Asia">Asia</option>
                <option value="Americas">Americas</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
    );
}

