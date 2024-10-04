import { Link } from "react-router-dom";
import Aside from "../main/Aside";
import { Cntx } from "../../context/DataContext";
import { useContext } from "react";

function Haqqimizda() {
    const { catSt } = useContext(Cntx)

    return (
        <section className="wrapper px-3 relative">
            <div className="absolute top-[-5px] left-0">{catSt && <Aside catSt={catSt} />}</div>
            <div className="text-gray-600 font-semibold text-sm py-6">
                <Link to="/">Home /</Link>
                <span className="capitalize"> About Us</span>
            </div>
            <h1 className="text-lg py-3">About Us</h1>
            <div className="text-[12px]">
                <p className="my-4">GreenShop Supermarket Chain started its operations in US in 2003, focusing on the food sector.</p>
                <p className="my-4">The successful development of the first supermarket near metro station led to the opening of the next supermarket in 2008. Following this, new supermarkets were opened in other residential areas of California, creating a chain of supermarkets near the metro station.</p>
                <p className="my-4">In parallel with the establishment of the GreenShop Supermarket chain, in 2004, a warehouse and office space covering nearly 3500 m² was built, and for the first time in UK, supermarkets began to be managed under a single central system. This central warehouse system can manage up to 100 supermarkets. The supermarket chain stands out with its modernity and convenient product placement. Every customer can purchase high-quality products such as fruits and vegetables, meat and dairy products, bakery items, alcoholic and non-alcoholic beverages from GreenShop Supermarkets. The chain offers both local and international products. Notably, German and other European products, known for their quality, eco-friendly composition, and shelf life, are available. GreenShop offers over 10,000 food products, delicacies, and premium alcoholic beverages, designed for those who prefer a wide selection and want to ensure quality. The experts in the trade sector are constantly searching for quality products, many of which are exclusively available at GreenShop Supermarkets.</p>
                <p className="my-4">Known for its variety of high-quality products, GreenShop Supermarket Chain always strives to provide healthy, modern, and economical services to its customers. Various types of food products, household goods, small home electronics, and more can be found at the supermarkets. Additionally, the “Children’s World” sections offer quality baby food, clothing, toys, and school supplies. With a primary focus on healthy food, GreenShop Supermarket Chain has earned the trust of a wide customer base for over 20 years by providing well-preserved products in optimal conditions.</p>
            </div>
            <img src="./src/assets/haqqimizda.webp" alt="About Us Photo" className="mb-9 cursor-pointer" />
        </section>
    );
}

export default Haqqimizda;
