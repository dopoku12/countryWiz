import Footer from "../components/Footer";
import Form from "../components/Form";
const Home = ({ SearchIcon, searchHandler, BookMark, footerIcons }) => {
    return (

        <div className="landing-page">

            <div className="left-background">
                <main>

                </main>
            </div>

            <Form SearchIcon={SearchIcon} BookMark={BookMark} />
            <BookMark size={25} color={'F47D2F'} />
            <Footer footerIcons={footerIcons} />
        </div>

    );
}

export default Home;