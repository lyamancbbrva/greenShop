import axios from "axios";
import configObj from "../config/config";

async function getAllProducts(cat, subCat, page) {

    let salam = await axios.get(`${configObj.base}/products?subcategory=${subCat}&category=${cat}&per_page=13&page=${page}`)
    .then(res => res.data )

    return salam
    
    
}
export default  getAllProducts
