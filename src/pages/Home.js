import Footer from "../components/Footer";
import Form from "../components/Form";
import Info from "../components/Info";
import useFetchApi from "../customHooks/FetchApi";
const Home = ({ SearchIcon, searchHandler, BookMark, footerIcons }) => {

    const { save } = useFetchApi()

    return (
        <div className="landing-page">
            <div >
                <Form SearchIcon={SearchIcon} />
                <button onClick={console.log('save:', save)}>
                    <BookMark size={25} color={'F47D2F'} />
                </button>
            </div>

            <Info />

            <footer>
                <Footer footerIcons={footerIcons} />
            </footer>

        </div>

    );
}

export default Home;