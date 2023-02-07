import { useState } from "react";
import useDebounce from "../hooks/usedebounce";
import useFetchApi from "../hooks/usefetchapi";
import WorldSvg from "../components/WorldSvg";
// import SVGComponent from "../components/SVGComponent";
import Dashboard from "../components/Dashboard";
import Content from "../components/Content"
import Footer from "../components/Footer";
import Filter from "../components/Filter";


const Home = ({ SearchIcon, searchHandler, footerIcons }) => {
    const [name, setName] = useState('');
    const [submit, setSubmit] = useState(null);
    let { debounceValue } = useDebounce(name)
    const { data, pending } = useFetchApi(debounceValue, submit)
    function inputHandler(e) {
        e.preventDefault();
        setName(e.target.value)
        name && setSubmit(true)
    };
    return (
        <div className="home">
            <header className="home-header" >
                {
                    data.slice(0, 1).map(i => {
                        let name = Object.values(i.name.nativeName);
                        let nativeName = Object.values(name.map(i => i.common));
                        return (
                            <div className="banner" key={i.area}>
                                <h1>{
                                    pending ? 'LOADING...' : nativeName[0]
                                }
                                </h1>
                                <h2>
                                    Country in {i.subregion}
                                </h2>
                            </div>
                        )
                    })
                }
                <nav>
                    <form className="landing-page-form" onSubmit={inputHandler}>
                        <input type="search" id="search-box"
                            placeholder='Enter Country Name ....'
                            value={name}
                            onChange={inputHandler} />

                        <button>
                            <SearchIcon
                                type="submit"
                                className="search-icon"
                                color=' #a8d3dc'
                                size={15} />
                        </button>
                        {
                            name && <Filter data={data.slice(0, 10)} setName={setName} setSubmit={setSubmit} />
                        }
                    </form>
                </nav>
            </header>
            <main>

                <svg
                    id="svgMap"
                    className="svg-map"
                    mapsvg="http://mapsvg.com"
                    dc="http://purl.org/dc/elements/1.1/"
                    rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                    svg="http://www.w3.org/2000/svg"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-50 -20 1090 700"
                    stroke='white'
                    fill=" #a8d3dc"
                    strokeWidth={1}
                >
                    <WorldSvg />
                </svg>
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