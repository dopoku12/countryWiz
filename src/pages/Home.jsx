import { useState } from "react";
import useDebounce from "../hooks/usedebounce";
import useFetchApi from "../hooks/usefetchapi";
import WorldSvg from "../components/WorldSvg";
import Dashboard from "../components/Dashboard";
import Content from "../components/Content"
import Footer from "../components/Footer";
import Filter from "../components/Filter";
const Home = ({ SearchIcon, searchHandler, footerIcons }) => {
    const [name, setName] = useState('');
    const [submit, setSubmit] = useState(null);
    let { debounceValue } = useDebounce(name)
    const { data, error, pending } = useFetchApi(debounceValue, submit)
    function handleSubmit(e, input) {
        e.preventDefault();
        submit || setSubmit(true)
        setSubmit(input)
    };
    function handleInput(e) {
        setName(e.target.value)
    }
    return (
        <div className="home">
            <header className="home-header" >
                <nav >
                    <form className="landing-page-form" onSubmit={handleSubmit}>
                        <button>
                            <SearchIcon
                                type="submit"
                                className="search-icon"
                                color=' #a8d3dc'
                                size={15} />
                        </button>
                        <input type="search" id="search-box"
                            placeholder='Enter Country Name ....'
                            value={name}
                            onChange={handleInput} />
                        {
                            name && <Filter data={data} handleInput={handleInput} />
                        }
                    </form>
                </nav>
                {
                    data.slice(0, 1).map(i => {
                        let name = Object.values(i.name.nativeName);
                        let nativeName = Object.values(name.map(i => i.common));
                        console.log('nt', nativeName);
                        return (
                            <div className="banner" key={i.area}>
                                <h1>
                                    {nativeName[0]}
                                </h1>
                                <h2>
                                    Country in {i.subregion}
                                </h2>
                            </div>
                        )
                    })
                }
            </header>

            <main>
                <WorldSvg />
                <Dashboard data={data.slice(0, 1)} pending={pending} />
                <Content data={data.slice(0, 1)} pending={pending} />
            </main>
            <footer>
                <Footer footerIcons={footerIcons} />
            </footer>
        </div>
    );
}
export default Home;