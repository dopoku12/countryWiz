import Footer from "../components/Footer";
import Form from "../components/Form";
import useFetchApi from "../hooks/usefetchapi";
const Home = ({ SearchIcon, searchHandler, BookMark, footerIcons }) => {
    const { data, error, pending } = useFetchApi()
    console.log('home:', data);
    return (
        <div className="landing-page">
            <div >
                <Form SearchIcon={SearchIcon} />
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
                                    {console.log('flag', i.flags.svg)}
                                    {console.log('arms', i.coatOfArms.svg)}

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