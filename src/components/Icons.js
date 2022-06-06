import { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaMap, FaHome, FaRocket, FaSearch } from 'react-icons/fa'
import CountryDataPage from '../pages/CountryDataPage';
import App from '../App';

const Icons = () => {
    const [iconLinks, setIconLinks] = useState([
        { id: 0, colorCode: ' #0077b5', iconName: FaHome, name: 'Home', pathName: '/' },
        { id: 1, colorCode: '8cac5', iconName: FaMap, name: 'Map', pathName: '/Map' },
        { id: 2, colorCode: '8cac5', iconName: FaRocket, name: 'Portfolio', pathName: '' },
        { id: 4, colorCode: 'black', iconName: FaGithub, name: 'Github', pathName: '/https://github.com/dopoku12' },
        { id: 5, colorCode: ' #0077b5', iconName: FaLinkedin, name: 'Linkedin', pathName: '/https://www.linkedin.com/in/david-opoku-7008721b7' },
        { id: 6, colorCode: '78cac5', iconName: FaEnvelope, name: 'Email', pathName: '/' },

    ].map(i => (
        { ...i, status: false }
    ))
    )

    const navIcons = iconLinks.filter((i) => i.id <= 2)
    const footerIcons = iconLinks.filter((i) => i.id > 3)



    return (
        <div>
            <App navIcons={navIcons} search={FaSearch} />
            <CountryDataPage footerIcons={footerIcons} />
        </div>

    );
}

export default Icons;