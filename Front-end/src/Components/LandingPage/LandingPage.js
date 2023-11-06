import Footer from "./Footer";
import NavBar from "./NavBar";
import Support from "./Support";


export default function LandingPage({ children }) {


    return <>
        <NavBar/>
            {children}
        <Footer />
        <Support />
    </>
}