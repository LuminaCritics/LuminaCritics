import Header from "../components/Header";
import Footer from "../components/Footer";

export default function DefaultLayout ({children}) {
    return (
        <div className="flex flex-col items-center">
            <Header />
            {children}
            <Footer />
        </div>
    );
}