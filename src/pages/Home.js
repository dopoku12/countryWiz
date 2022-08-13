import Footer from "../components/Footer";
import Form from "../components/Form";
import Info from "../components/Info";
// import useFetchApi from "../customHooks/usefetchapi";
const Home = ({ SearchIcon, searchHandler, BookMark, footerIcons }) => {

    return (
        <div className="landing-page">
            <div >
                <Form SearchIcon={SearchIcon} />
                <button >
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