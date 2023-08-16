import React ,{PropsWithChildren} from  "react";
import header from '../Header';
import Navbar from '../Header/index';
import Footer from '../Footer/index';


const Layout = ({ children }: PropsWithChildren) => {
    return (
        <>
            <Navbar/>
                {
                    children
                }
            <Footer/>
        </>
    )
}

export default Layout