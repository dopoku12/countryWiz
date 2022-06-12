const Home = ({ SearchIcon, searchHandler, BookMark }) => {

    return (
        <div className="landing-page">
            <form className="landing-page-form">
                <button type="submit">
                    <SearchIcon className="search-icon" color='F47D2F' size={15} />
                </button>
                <input type="search" id="search-box" placeholder="Enter Country..." />
            </form>
            <BookMark size={25} color={'F47D2F'} />
        </div>
    );
}

export default Home;