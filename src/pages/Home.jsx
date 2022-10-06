import { useState } from "react";
import useDebounce from "../hooks/usedebounce";
import useFetchApi from "../hooks/usefetchapi";
import WorldSvg from "../components/WorldSvg";
import Dashboard from "../components/Dashboard";
import Content from "../components/Content"
import Footer from "../components/Footer";
const Home = ({ SearchIcon, searchHandler, BookMark, footerIcons }) => {
    const [name, setName] = useState('');
    const [submit, setSubmit] = useState(null);
    let { debounceValue } = useDebounce(name)
    const { data, error, pending } = useFetchApi(debounceValue)
    function handleSubmit(e) {
        e.preventDefault();
        !submit ?
            setSubmit(true) :
            setSubmit(false);
    };
    return (
        <div className="home">
            <header className="home-header" >
                {
                    data.map(i => {
                        let name = Object.values(i.name.nativeName);
                        let nativeName = Object.values(name.map(i => i.common));
                        console.log('nt', nativeName);
                        return (
                            <div className="banner">
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
                <nav >
                    <form className="landing-page-form" onSubmit={handleSubmit}>
                        <button>
                            <SearchIcon
                                type="submit"
                                className="search-icon"
                                color='F47D2F'
                                size={15} />
                        </button>
                        <input type="search" id="search-box"
                            placeholder=''
                            value={name}
                            onChange={(e) => setName(e.target.value)} />
                    </form>
                </nav>
                <button >
                    <BookMark size={25} color={'F47D2F'} />
                </button>
            </header>

            <main>
                <WorldSvg />
                <Dashboard data={data} pending={pending} />
                <Content data={data} pending={pending} />
            </main>
            <footer>
                <Footer footerIcons={footerIcons} />
            </footer>
        </div>
    );
}
export default Home;