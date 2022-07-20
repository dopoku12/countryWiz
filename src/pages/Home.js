import Footer from "../components/Footer";
import Form from "../components/Form";
const Home = ({ SearchIcon, searchHandler, BookMark, footerIcons }) => {


    return (
        <div className="landing-page">
            <div >
                <Form SearchIcon={SearchIcon} BookMark={BookMark} />
                <BookMark size={25} color={'F47D2F'} />
            </div>


            <footer>
                <Footer footerIcons={footerIcons} />
            </footer>

        </div>

    );
}

export default Home;