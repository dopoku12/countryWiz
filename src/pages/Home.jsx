import { useState } from "react";
import useDebounce from "../hooks/usedebounce";
import useFetchApi from "../hooks/usefetchapi";
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
            <header className="landing-page-form" >
                <form onSubmit={handleSubmit}>
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
            </header>
            <button >
                <BookMark size={25} color={'F47D2F'} />
            </button>

            <main>
                <Content data={data} pending={pending} />
            </main>
            <footer>
                <Footer footerIcons={footerIcons} />
            </footer>
        </div>
    );
}
export default Home;