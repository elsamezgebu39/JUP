import axios from "axios";

class ProductService {
  
  getAllProducts() {
    return axios.get('http://aadaa.omishtujoy.com/api/product');
  }

  getByProductId(id) {
    return axios.get(`http://aadaa.omishtujoy.com/api/product/${id}`);
  }

}

export default new ProductService();
