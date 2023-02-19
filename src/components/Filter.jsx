import { useState } from "react";
export const Filter = ({ data, setName }) => {
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

export const Options = () => {
    return (
        <div>
            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select an option</label>
            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="Asia">Asia</option>
                <option value="America">America</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
    );
}

