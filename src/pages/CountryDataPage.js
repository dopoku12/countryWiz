import Flags from "../components/Flags"


function CountryDataPage({ footerIcons }) {


    const footerLinks = footerIcons.map((i) =>
        <li key={i.id} className={i.name} >
            <a target='_blank' rel="noreferrer" href={i.pathName} >
                <p>
                    <i.iconName size={25} color={i.colorCode} />
                    {i.name}
                </p>
            </a>
        </li>
    )

    return (
        <div className="left-background">
            <main>
                <Flags />



            </main>

            <footer>
                <ul className='footer-nav-ul'>
                    {
                        footerLinks
                    }
                </ul>
            </footer>
        </div>
    )
}

export default CountryDataPage