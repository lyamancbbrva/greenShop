import { axiosInstance } from "../config/axiosInstance";

async function getAllProducts() {
    try {
        const res = await axiosInstance.get(`/products`);
        return res.data;
    } catch (error) {
        return error;
    }
}

async function createProduct(obj) {
    try {
        const res = await axiosInstance.post(`/products`, obj);
        return res.data;
    } catch (error) {
        return error;
    }
}

async function getDiscountedProduct() {
    try {
        const res = await axiosInstance.get(`/products/discounted`);
        return res.data;
    } catch (error) {
        return error;
    }
}

async function getPopularProduct() {
    try {
        const res = await axiosInstance.get(`/products/popular`);
        return res.data;
    } catch (error) {
        return error;
    }
}

async function getProductById(id) {
    try {
        const res = await axiosInstance.get(`/products/${id}`);
        return res.data;
    } catch (error) {
        return error;
    }
}

async function editProduct(id, obj) {
    try {
        const res = await axiosInstance.put(`/products/${id}`, obj);
        return res.data;
    } catch (error) {
        return error;
    }
}

async function deleteProduct(id) {
    try {
        const res = await axiosInstance.delete(`/products/${id}`);
        return res.data;
    } catch (error) {
        return error;
    }
}

async function getProductByCategory(id) {
    try {
        const res = await axiosInstance.get(`/products/category/${id}?limit=50`);
        return res.data;
    } catch (error) {
        return error;
    }
}

async function getProductBySubcategory(id) {

    try {
        const res = await axiosInstance.get(`/products/subcategory/${id}?limit=50`);
        return res.data;
    } catch (error) {
        return error;
    }
}

async function getSliders() {
    try {
        const res = await axiosInstance.get(`/slider`);
        return res.data;
    } catch (error) {
        return error;
    }
}

async function createSlider(obj) {
    try {
        const res = await axiosInstance.post(`/slider`, obj);
        return res.data;
    } catch (error) {
        return error;
    }
}

async function deleteSlider(id) {
    try {
        const res = await axiosInstance.delete(`/slider/${id}`);
        return res.data;
    } catch (error) {
        return error;
    }
}

async function createImg(formData) {
    try {
        const res = await axiosInstance.post(`/img`, formData, { headers: { "Content-Type": 'multipart/formdata' } });
        return res.data;
    } catch (error) {
        return error;
    }
}

async function deleteImg(filename) {
    try {
        const res = await axiosInstance.delete(`/img/${filename}`);
        return res.data;
    } catch (error) {
        return error;
    }
}

async function postLogin(obj) {
    try {
        const res = await axiosInstance.post('/auth/login', obj);
        return res.data;
    } catch (error) {
        return error;
    }
}

async function registerUser(obj) {
    try {
        const res = await axiosInstance.post('/auth/register', obj);
        return res.data;
    } catch (error) {
        return error;
    }
}

async function getCategories() {
    try {
        const res = await axiosInstance.get(`/categories`);
        return res.data;
    } catch (error) {
        return error;
    }
}

async function getCategoryById(id) {
    try {
        const res = await axiosInstance.get(`/categories/${id}`);
        return res.data;
    } catch (error) {
        return error;
    }
}

async function createCategory(obj) {
    try {
        const res = await axiosInstance.post(`/categories`, obj);
        return res.data;
    } catch (error) {
        return error;
    }
}

async function editCategory(id, obj) {
    try {
        const res = await axiosInstance.put(`/categories/${id}`, obj);
        return res.data;
    } catch (error) {
        return error;
    }
}

async function deleteCategory(id) {
    try {
        const res = await axiosInstance.delete(`/categories/${id}`);
        return res.data;
    } catch (error) {
        return error;
    }
}

async function createSubcategory(obj) {
    try {
        const res = await axiosInstance.post(`/categories/subcategory`, obj);
        return res.data;
    } catch (error) {
        return error;
    }
}

async function updateSubcategory(id, obj) {
    try {
        const res = await axiosInstance.put(`/categories/subcategory/${id}`, obj);
        return res.data;
    } catch (error) {
        return error;
    }
}

async function deleteSubcategory(id) {
    try {
        const res = await axiosInstance.delete(`/categories/subcategory/${id}`);
        return res.data;
    } catch (error) {
        return error;
    }
}

async function verifyToken() {
    try {
        const res = await axiosInstance.get('auth/verify-token');
        return res.data;
    } catch (error) {
        return false;
    }
}

async function searchProduct(query) {
    try {
        const res = await axiosInstance.get(`/products/search?name=${query}`);
        return res.data;
    } catch (error) {
        return false;
    }
}


export default getAllProducts

export {
    verifyToken,
    searchProduct,
    getAllProducts,
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
    registerUser,
    getCategories,
    getCategoryById,
    createCategory,
    editCategory,
    deleteCategory,
    createSubcategory,
    updateSubcategory,
    deleteSubcategory,
};
