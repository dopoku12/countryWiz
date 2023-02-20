
import { useState } from "react";
import useDebounce from "../hooks/usedebounce";
import useFetchApi from "../hooks/usefetchapi";
import Cards from "../components/Cards";
import Input from "../components/Input";
// import Content from "../components/Content"
import Nav from "../components/Nav";
import { Options } from "../components/Filter";

const Home = ({ SearchIcon, searchHandler, Icons }) => {
    //sets Default region value is passed as a prop for Options
    const [region, setRegion] = useState('Africa')
    console.log(region);

    //Default value before anything is entered in Input component
    let [name, setName] = useState('');
    //changes setName Value after usrInput
    function inputHandler(e) {
        e.preventDefault();
        setName(e.target.value)

    };
    //Debounces usr input
    let { debounceValue } = useDebounce(name)
    //takes debounced value&region value returns api data
    const { data, pending } = useFetchApi(debounceValue, region)
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
                <Input SearchIcon={SearchIcon}
                    setName={setName}
                    name={name}
                    data={data}
                    inputHandler={inputHandler} />

                <Options setRegion={setRegion} region={region} />
            </nav>

            <main className="">
                {
                    console.log(data)}
                {
                    console.log('slice', data.slice(0, 1))
                }
                <Cards data={data.slice(0, 8)} pending={pending} />
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