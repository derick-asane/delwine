import axios from "axios";

const API_URL = "http://localhost:3001/products";

const productService = {
  getProducts: async () => {
    try {
      const response = await axios.get(`${API_URL}`);
      return response.data;
    } catch (error) {
      throw new Error("Fail to fetch products");
    }
  },

  getProduct: async () => {
    try {
      const response = await axios.get(`${API_URL}/products`);
      return response.data;
    } catch (error) {
      throw new Error("fail to fetch product");
    }
  },
  createProduct: async (data) => {
    try {
      const response = await axios.post(`${API_URL}`, data);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  },
  deleteProduct: async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/${id}`);
      return response;
    } catch (error) {
      throw new Error(error);
    }
  },
  modifyProduct: async (productId, data) => {
    try {
      const response = await axios.put(`${API_URL}/${productId}`, data);
      return response;
    } catch (error) {
      throw new Error(error);
    }
  },
};

export default productService;
