import { Outlet } from 'react-router-dom'
import Header from '../component/header/Header'
import Footer from '../component/footer/Footer'

function Layout({catSt,setCatSt}) {
    return (
        <>
            <Header catSt={catSt} setCatSt={setCatSt}/>
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout