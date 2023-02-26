import { useState } from "react";
import useDebounce from "../hooks/usedebounce";
import useFetchApi from "../hooks/usefetchapi";
import Cards from "../components/Cards";
import Input from "../components/Input";
import Nav from "../components/Nav";
import { Options } from "../components/Filter";

const Home = ({ SearchIcon, searchHandler, Icons }) => {
    //sets Default region value is passed as a prop for Options
    const [region, setRegion] = useState('Africa')
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
    console.log(name);
    return (
        <div className="">
            <header className=" flex justify-between shadow-2xl shadow-black-50 p-4" >
                <h1 className="font-bold text-4xl ">
                    Where in the World?
                </h1>
                <Nav Icons={Icons} />
            </header>

            <nav className="flex  flex-nowrap">
                <Input SearchIcon={SearchIcon}
                    setName={setName}
                    name={name}
                    data={data}
                    inputHandler={inputHandler} />
                <Options setRegion={setRegion} region={region} />
            </nav>

            <main>
                <Cards data={data.slice(0, 8)} setName={setName} pending={pending} />
            </main>
            <footer>
                copyright David Opoku 2020 ©
            </footer>
        </div>
    );
}
export default Home;