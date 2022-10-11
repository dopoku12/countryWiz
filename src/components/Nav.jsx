const Nav = ({ navIcons, searchHandler, RouterLinks, SearchIcon }) => {
    return (
        <nav className="header-nav">
            <ul className="header-nav-ul">

                {navIcons.map((i) =>
                    <li key={i.population} className={i.name} >
                        <RouterLinks to={i.pathName}>
                            <label>
                                <i.iconName size={25} color={i.colorCode} />
                                {i.name}
                            </label>
                        </RouterLinks>
                    </li>
                )}
            </ul>
        </nav>
    );
}

export default Nav;