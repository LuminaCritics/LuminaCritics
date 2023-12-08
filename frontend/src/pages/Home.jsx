import Header from "../components/Header";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";

export default function Home() {
    return (
        <div>
            <Header />
            <div className="container w-4/5 mt-16 mx-auto">
                <Carousel/>
            </div>
            <Footer />
        </div>
    );
}
