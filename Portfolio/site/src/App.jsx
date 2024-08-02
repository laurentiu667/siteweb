import Navbar from "./Navbar";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Contact from "./Contact";
import Footer from "./Footer";
function App() {
    return (
        <>
            <Navbar />
            <div className="wrapper">
                <Page1 />
                <div className="title-project">My projects</div>
                <Page2 />
                <div className="title-project">My passions</div>
                <Page3 />
                <div className="title-project">Contact</div>
                <Contact />
            </div>
            <Footer />
        </>
    );
}

export default App;
