import Footer from "./Footer";
import Navbar from "./Navbar";
import ScrollTop from "./ScrollTop";

export default function Layout({ children }) {
    return (
        <div className="flex flex-col ">
            <ScrollTop/>
            <Navbar />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    )
}