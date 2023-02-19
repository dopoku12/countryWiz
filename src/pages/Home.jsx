
import { useState } from "react";
import useDebounce from "../hooks/usedebounce";
import useFetchApi from "../hooks/usefetchapi";
import Cards from "../components/Cards";
// import Content from "../components/Content"
import Nav from "../components/Nav";
import { Filter } from "../components/Filter";

const Home = ({ SearchIcon, searchHandler, Icons }) => {
    let [name, setName] = useState('');
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
            <header className=" flex justify-between shadow-2xl shadow-black-50 p-4" >
                <h1 className=" font-bold text-4xl ">
                    Where in the World?
                </h1>
                <Nav Icons={Icons} />
            </header>
            {
                data.slice(0, 1).map(i => {
                    let name = Object.values(i.name.nativeName);
                    let nativeName = Object.values(name.map(i => i.common));
                    return (
                        <div className=" banner font-bold text-2xl" key={i.area}>
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
            <nav className="flex  flex-nowrap">
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
                {//<Options />
                }
            </nav>
            <main>
                {
                    console.log(data)}
                {
                    console.log('slice', data.slice(0, 1))
                }
                <Cards data={data.slice(0, 1)} pending={pending} />
                {
                    //  <Content data={data.slice(0, 1)} pending={pending} />
                }
            </main>
            <footer>
                copyright 2020 ©
            </footer>
        </div>
    );
}
export default Home;