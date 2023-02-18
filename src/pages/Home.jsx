import { Form } from "react-router-dom";
import { useState } from "react";
import useDebounce from "../hooks/usedebounce";
import useFetchApi from "../hooks/usefetchapi";

import Dashboard from "../components/Dashboard";
import Content from "../components/Content"
import Footer from "../components/Footer";
import Filter from "../components/Filter";

const Home = ({ SearchIcon, searchHandler, footerIcons }) => {
    let [name, setName] = useState('');
    const [submit, setSubmit] = useState(null);
    let { debounceValue } = useDebounce(name)
    const { data, pending } = useFetchApi(debounceValue, submit)
    // function inputHandler(e) {
    //     e.preventDefault();
    //     setName(e.target.value)
    //     name && setSubmit(true)
    // };
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
                                    pending ? 'LOADING USER LOCATION...' : nativeName[0]
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
                    <Form className="landing-page-form" method='get' action="/">
                        <input type="search" id="search-box"
                            placeholder='Enter Country Name ....'
                            name="country"
                            onChange={(e) => setName(e.target.value)}
                            value={name} />
                        <button type="submit">
                            <SearchIcon
                                className="search-icon"
                                color=' #a8d3dc'
                                size={15} />
                        </button>
                        {
                            name && <Filter data={data.slice(0, 10)} setName={setName} setSubmit={setSubmit} />
                        }
                    </Form>
                </nav>
            </header>
            <main>

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