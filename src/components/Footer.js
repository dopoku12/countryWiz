
function Footer({ footerIcons }) {
    console.log('footerIcons:', footerIcons);
    return (


        <footer>
            <ul className='footer-nav-ul'>
                {
                    footerIcons.map((i) =>
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
        </footer>

    )
}
export default Footer