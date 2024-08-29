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
const cook = new Cookies()

function App() {
    const [modal, setModal] = useState(false)
    const [catSt, setCatSt] = useState(false)
    const [product, setProduct] = useState();
    const [auth, setAuth] = useState(false)

    const { pathname } = useLocation();

    function updateCount(id, increment) {
        const updatedProducts = product.map(item => {
            if (item.id === id) {
                return { ...item, count: item.count + increment > 0 ? item.count + increment : 1 };
            }
            return item;
        });

        setProduct(updatedProducts);
    }

    useEffect(() => {
        window.scroll(0, 0);

        if(pathname == '/admin'){
            const yoxla = verifyToken()
            yoxla.then( res => {
                setAuth(res.status)
                cook.set("user", res.user_login)
            })
        }else setAuth(false)
    }, [pathname]);

    return (
        <>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <Routes>
                <Route path='/' element={<Layout catSt={catSt} setCatSt={setCatSt} />}>
                    <Route path='/' element={<Main />} />
                    <Route path='/:category/:subCategory' element={<SubCategory updateCount={updateCount} catSt={catSt} product={product} setProduct={setProduct} />} />
                    <Route path='/product/:id' element={<CardInfo updateCount={updateCount} product={product} />} />
                    <Route path="/basket" element={<Basket />} />
                    <Route path="/haqqimizda" element={<Haqqimizda />} />
                    <Route path="/elaqe" element={<Elaqe />} />
                </Route>
                <Route path="/login" element={<Login />} />
               {
                auth ? 
                <Route path="/admin" element={<LayoutAdmin />} >
                    <Route path="/admin" element={<Home />}/>
                    <Route path="products" element={<Products  modal={modal} setModal={setModal}/>}/>
                    <Route path="category" element={<Category  modal={modal} setModal={setModal}/>}/>
                    <Route path="subcategory" element={<Subcategory  modal={modal} setModal={setModal}/>}/>
                </Route>
            : ''
               }
                <Route path='*' element={<Error404 />} />
            </Routes>
        </>
    );
}

export default App;