import { Outlet } from "react-router";
import Footer from "../../Footer/Footer";
import Navbar from "../../Header/Navbar";


const Root = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;