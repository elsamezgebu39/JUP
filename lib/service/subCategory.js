import axios from "axios";
class TopCategoryService {
  
  getAllSubCategories() {
    return axios.get(`http://aadaa.omishtujoy.com/api/sub_category`);
  }

  getBySubCategoryId(id) {
    return axios.get(`http://aadaa.omishtujoy.com/api/sub_category/${id}`);
  }

}

export default new TopCategoryService();
