import axios from "axios";
class UserService {
  getAllUsers() {
    return axios.get(`http://aadaa.omishtujoy.com/api/user`);
  }

  getByUserId(id) {
    return axios.get(`http://aadaa.omishtujoy.com/api/user/${id}`);
  }

  getUserProducts(id) {
    return axios.get(`http://aadaa.omishtujoy.com/api/user_product/${id}`);
  }

}

export default new UserService();
