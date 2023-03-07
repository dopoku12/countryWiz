function Nav({ links }) {
    return (
        <ul className='flex space-x-3'>
            {
                links.map(i =>
                    <li key={i.id} className={i.name} >
                        <a target='_blank' rel="noreferrer" href={i.pathName} >
                            <p>
                                <i.iconName size={25} color={i.colorCode} />
                                {i.name}
                            </p>
                        </a>
                    </li>
                )
            }
        </ul>
    )
}
export default Nav