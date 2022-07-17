const Form = ({ SearchIcon, clickHandler }) => {
    return (
        <form className="landing-page-form">
            <button type="submit">
                <SearchIcon className="search-icon" color='F47D2F' size={15} />
            </button>
            <input type="search" id="search-box" placeholder="Enter Country..." />
        </form>
    );
}

export default Form;