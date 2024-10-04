import { Route, Routes, useLocation } from "react-router-dom";
import Main from "./component/main/Main";
import Error404 from "./component/error/Error404";
import CardInfo from "./component/main/CardInfo";
import { useEffect, useState } from "react";
import SubCategory from "./component/main/SubCategory";
import Layout from "./layout/Layout";
import { Basket } from "./component/header/Basket";
import Haqqimizda from "./component/pages/Haqqimizda";
import Elaqe from "./component/pages/Elaqe";
import Login from "./admin/Login";
import { Toaster } from "react-hot-toast";
import Products from "./admin/Products";
import Category from "./admin/Category";
import Subcategory from "./admin/Subcategory";
import Home from "./admin/Home";
import LayoutAdmin from "./admin/LayoutAdmin";
import { Cookies } from "react-cookie";
import { verifyToken } from "./api/api";
import Register from "./admin/Register";
import SliderPage from "./admin/SliderPage";
const cook = new Cookies()

function App() {
    const [catSt, setCatSt] = useState(false)
    const [auth, setAuth] = useState(false)
    const { pathname } = useLocation();

    useEffect(() => {
        window.scroll(0, 0);
        if (pathname.split('/')[1] === 'admin') {
            if (pathname.startsWith('/admin')) {
                const yoxla = verifyToken()
                yoxla.then(res => {
                    setAuth(res.status)
                    cook.set("user", res.user_login)
                })
            } else setAuth(false);
        }
    }, [pathname]);

    return (
        <>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <Routes>
                {
                    auth ?
                        <Route path="/admin" element={<LayoutAdmin />} >
                            <Route path="/admin" element={<Home />} />
                            <Route path="products" element={<Products />} />
                            <Route path="categories" element={<Category />} />
                            <Route path="subcategory" element={<Subcategory />} />
                            <Route path="slider" element={<SliderPage />} />
                        </Route>
                        : <Route path="/admin" element={<Login />} />
                }
                <Route path='/' element={<Layout catSt={catSt} setCatSt={setCatSt} />}>
                    <Route path='/' element={<Main />} />
                    <Route path='/:category/:subCategory' element={<SubCategory catSt={catSt} />} />
                    <Route path='/product/:id' element={<CardInfo catSt={catSt}/>} />
                    <Route path="/basket" element={<Basket catSt={catSt}/>} />
                    <Route path="/haqqimizda" element={<Haqqimizda catSt={catSt}/>} />
                    <Route path="/elaqe" element={<Elaqe catSt={catSt}/>} />
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path='*' element={<Error404 />} />
            </Routes>
        </>
    );
}

export default App;