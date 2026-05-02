import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/footer/Footer';
import { Outlet } from 'react-router';

const Root = () => {
    return <>
    <Navbar></Navbar>
    <Outlet></Outlet>
    <Footer></Footer>
    </>
        
};

export default Root;