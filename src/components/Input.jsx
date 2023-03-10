import { Filter } from "./Filter";
const Input = ({ SearchIcon, inputHandler, setName, name, data }) => {
    return (
        <form className="landing-page-form" onSubmit={inputHandler}>
            <input type="search" id="search-box"
                placeholder='Enter Country Name ....'
                value={name}
                onChange={inputHandler} />
            <button>
                <SearchIcon
                    type="submit"
                    className="search-icon"
                    color=' #a8d3dc'
                    size={15} />
            </button>
            {
                name && <Filter
                    data={data.slice(0, 10)}
                    setName={setName} />
            }
        </form >
    );
}
export default Input;