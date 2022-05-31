import Flags from "../components/Flags"

import { FaGithub, FaLinkedin, FaEnvelope, } from 'react-icons/fa'
function CountryDataPage() {
    const iconLinks = [
        { id: 3, colorCode: 'black', iconName: FaGithub, name: 'Github', pathName: '/https://github.com/dopoku12' },
        { id: 4, colorCode: ' #0077b5', iconName: FaLinkedin, name: 'Linkedin', pathName: '/https://www.linkedin.com/in/david-opoku-7008721b7' },
        { id: 5, colorCode: '78cac5', iconName: FaEnvelope, name: 'Email', pathName: '/' },
    ]

    const footerLinks = iconLinks.map((i) =>
        <li key={i.id} className={i.name} >
            <a href={i.pathName} >
                <p>
                    <i.iconName size={25} color={i.colorCode} />
                    {i.name}
                </p>
            </a>
        </li>
    )

    return (
        <div className="left-background">
            <Flags />
            <main>
                <header>
                    <h1>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic quod neque praesentium cumque, ab esse magnam, impedit labore enim perferendis, sit repellat! Alias sit deleniti porro quasi consequuntur tempora illo!
                    </h1>

                </header>
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