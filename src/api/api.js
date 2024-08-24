import axios from "axios";
import configObj from "../config/config";
import { axiosInstance } from "../config/axiosInstance"

async function getAllProducts(cat, subCat, page) {
    let salam = await axios.get(`${configObj.base}/products?subcategory=${subCat}&category=${cat}&per_page=13&page=${page}`)
    .then(res => res.data )
    return salam
}

async function getAllProductss() {
    const res = await axiosInstance.get(`/products`)
    return res.data
}

async function createProduct() {
    const res = await axiosInstance.post(`/products`)
    return res.data
}

async function getDiscountedProduct() {
    const res = await axiosInstance.get(`/products/discounted`)
    return res.data
}

async function getPopularProduct() {
    const res = await axiosInstance.get(`/products/popular`)
    return res.data
}

async function getProductById(id) {
    const res = await axiosInstance.get(`/products/:id`, id)
    return res.data
}

async function editProduct(id) {
    const res = await axiosInstance.put(`/products/:id`, id)
    return res.data
}

async function deleteProduct(id) {
    const res = await axiosInstance.delete(`/products/:id`, id)
    return res.data
}

async function getProductByCategory(id) {
    const res = await axiosInstance.get(`/products/category/:id`, id)
    return res.data
}

async function getProductBySubcategory(id) {
    const res = await axiosInstance.get(`/products/subcategory/:id`, id)
    return res.data
}

async function getSliders() {
    const res = await axiosInstance.get(`/slider`)
    return res.data
}

async function createSlider() {
    const res = await axiosInstance.post(`/slider`)
    return res.data
}

async function deleteSlider(id) {
    const res = await axiosInstance.delete(`/slider/:id`, id)
    return res.data
}

async function createImg() {
    const res = await axiosInstance.post(`/img`)
    return res.data
}

async function deleteImg() {
    const res = await axiosInstance.delete(`/img/:filename`)
    return res.data
}

async function postLogin(obj) {
    const res = await axiosInstance.post('auth/register', obj)
    return res.data
}

async function getCategories() {
    const res = await axiosInstance.get(`/categories`)
    return res.data
}

async function getCategoryById(id) {
    const res = await axiosInstance.get(`/categories/:id`, id)
    return res.data
}

async function createCategory() {
    const res = await axiosInstance.post(`/categories`)
    return res.data
}

async function editCategory(id) {
    const res = await axiosInstance.put(`/categories/:id`, id)
    return res.data
}

async function deleteCategory(id) {
    const res = await axiosInstance.delete(`/categories/:id`, id)
    return res.data
}

async function createSubcategory() {
    const res = await axiosInstance.post(`/subcategories`)
    return res.data
}

async function updateSubcategory(id) {
    const res = await axiosInstance.put(`/subcategories/:id`, id)
    return res.data
}

async function deleteSubcategory(id) {
    const res = await axiosInstance.delete(`/subcategories/:id`, id)
    return res.data
}

export default getAllProducts

export {
    getAllProductss,
    createProduct,
    getDiscountedProduct,
    getPopularProduct,
    getProductById,
    editProduct,
    deleteProduct,
    getProductByCategory,
    getProductBySubcategory,
    getSliders,
    createSlider,
    deleteSlider,
    createImg, 
    deleteImg,
    postLogin,
    getCategories,
    getCategoryById,
    createCategory,
    editCategory,
    deleteCategory,
    createSubcategory,
    updateSubcategory,
    deleteSubcategory
}