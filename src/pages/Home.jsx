import Cards from "../components/Cards";
import Input from "../components/Input";
import { Options } from "../components/Filter";
const Home = ({
    region, setRegion,
    name, setName,
    data, pending,
    setSwitchComp,
    FaSearch,

}) => {
    //changes setName Value after usrInput
    function inputHandler(e) {
        e.preventDefault();
        setName(e.target.value)
    };


    return (
        <div className="">

            <nav className=" m-5 flex justify-between flex-nowrap">
                <Input SearchIcon={FaSearch}
                    setName={setName}
                    name={name}
                    data={data}
                    inputHandler={inputHandler} />
                <Options setRegion={setRegion}
                    region={region} />
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