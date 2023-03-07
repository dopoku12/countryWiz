import Cards from "../components/Cards";
import Input from "../components/Input";
import Nav from "../components/Nav";
import { Options } from "../components/Filter";
import {
    FaGithub, FaLinkedin,
    FaEnvelope, FaRocket,
    FaSearch, FaSun, FaMoon
}
    from 'react-icons/fa'

const Home = ({
    region, setRegion,
    name, setName,
    data, pending,
    setSwitchComp
}) => {
    const links = [
        {
            id: 3, colorCode: '8cac5', iconName: FaRocket,
            name: 'Portfolio', pathName: 'https://davidopoku-portfolio.netlify.app/'
        },

        {
            id: 4, colorCode: 'black', iconName: FaGithub,
            name: 'Github', pathName: 'https://github.com/dopoku12'
        },
        {
            id: 5, colorCode: ' #0077b5', iconName: FaLinkedin,
            name: 'Linkedin', pathName: 'https://www.linkedin.com/in/david-opoku-7008721b7'
        },
        {
            id: 6, colorCode: '78cac5', iconName: FaEnvelope,
            name: 'Email', pathName: ''
        }]

    //changes setName Value after usrInput
    function inputHandler(e) {
        e.preventDefault();
        setName(e.target.value)
    };

    return (
        <div className="">
            <header className=" flex justify-between shadow-2xl shadow-black-50 p-4" >
                <h1 className="font-bold text-4xl ">
                    Where in the World?
                </h1>
                <Nav links={links} />
                <FaMoon size={35} />
                <FaSun size={35} />
            </header>

            <nav className="flex  flex-nowrap">
                <Input SearchIcon={FaSearch}
                    setName={setName}
                    name={name}
                    data={data}
                    inputHandler={inputHandler} />
                <Options setRegion={setRegion} region={region} />
            </nav>

            <main>
                <Cards data={data.slice(0, 8)}
                    setName={setName}
                    pending={pending}
                    setSwitchComp={setSwitchComp}
                />
            </main>
            <footer>
                copyright David Opoku 2020 ©
            </footer>
        </div>
    );
}
export default Home;