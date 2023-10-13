import axios from "axios";
class SubCategoryService {

  getAllTopCategories() {
    return axios.get(`http://aadaa.omishtujoy.com/api/top_category`);
  }

  getByTopCategoryId(id) {
    return axios.get(`http://aadaa.omishtujoy.com/api/top_category/${id}`);
  }

}

export default new SubCategoryService();
