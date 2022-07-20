import Form from "./Form"
const Nav = ({ navIcons, searchHandler, RouterLinks, SearchIcon, BookMark }) => {

    return (
        <nav className="header-nav">
            <ul className="header-nav-ul">

                <Form SearchIcon={SearchIcon} />
                <BookMark size={25} color={'F47D2F'} />


                {
                    navIcons.map((i) =>
                        <li key={i.id} className={i.name} >
                            <RouterLinks to={i.pathName}>
                                <label>
                                    <i.iconName size={25} color={i.colorCode} />
                                    {i.name}
                                </label>
                            </RouterLinks>
                        </li>
                    )
                }
            </ul>

        </nav>
    );
}

export default Nav;