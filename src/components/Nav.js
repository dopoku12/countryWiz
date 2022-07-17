import Form from "./Form"
const Nav = ({ navIcons, searchHandler, RouterLinks, SearchIcon, BookMark }) => {

    return (
        <ul className="header-nav-ul">

            <Form SearchIcon={SearchIcon} />
            <BookMark size={25} color={'F47D2F'} />


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
        </ul>

    );
}

export default Nav;