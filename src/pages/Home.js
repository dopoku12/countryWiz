import { useState } from "react";
import Footer from "../components/Footer";
import useDebounce from "../hooks/usedebounce";
import useFetchApi from "../hooks/usefetchapi";

const Home = ({ SearchIcon, searchHandler, BookMark, footerIcons }) => {
    const [name, setName] = useState('');
    const [submit, setSubmit] = useState(null);
    let { debounceValue } = useDebounce(name)
    const { data, error, pending } = useFetchApi(debounceValue)

    function handleSubmit(e) {
        e.preventDefault();
        // !submit ?
        //     setSubmit(true) :
        //     setSubmit(false);
    };

    console.log('home:', data);
    return (
        <div className="landing-page">
            <div >
                <form className="landing-page-form" onSubmit={handleSubmit}>
                    <button>
                        <SearchIcon
                            type="submit"
                            className="search-icon"
                            color='F47D2F'
                            size={15}
                        />
                    </button>
                    <input type="search" id="search-box"
                        placeholder=''
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </form>


                <button >
                    <BookMark size={25} color={'F47D2F'} />
                </button>
            </div>
            <article>
                <aside className="right-background">
                    {
                        pending && <h1>LOADING...</h1>
                    }
                    {
                        data.map(i =>
                            <div key={i.area}>
                                <div>
                                    <img className="arms-img" src={i.coatOfArms.svg} alt=""
                                        style={{ height: 60 }}
                                    />
                                    <img className="flag-img" src={i.flags.svg} alt="" />
                                </div>
                            </div>
                        )
                    }
                </aside>
            </article>

            <footer>
                <Footer footerIcons={footerIcons} />
            </footer>

        </div>
    );
}

export default Home;