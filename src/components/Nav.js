const Nav = ({ navIcons, searchHandler, RouterLinks, SearchIcon }) => {
    return (
        <nav>
            <ul className="header-nav-ul">
                {
                    navIcons.map((i) =>
                        <li key={i.id} className={i.name} >
                            <RouterLinks to={i.pathName}>
                                <p>
                                    <i.iconName size={25} color={i.colorCode} />
                                    {i.name}
                                </p>
                            </RouterLinks>
                        </li>
                    )
                }
                <li className="input-group">
                    <form className="nav-form">
                        <input type="search" id="nav-search-box" placeholder="Enter County..." />
                        <button type="submit">
                            <SearchIcon className="search-icon" />
                        </button>
                    </form>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;