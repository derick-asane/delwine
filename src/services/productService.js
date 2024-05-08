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
};

export default productService;
