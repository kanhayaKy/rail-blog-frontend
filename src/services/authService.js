import axios from "axios";
import config from "./config";

const BASE_URL = "http://localhost:3000/api/v1";

export default class AuthService {
  static async registerUser(user) {
    return axios.post(`${BASE_URL}/users`, user);
  }
  static async loginUser(user) {
    return axios.post(`${BASE_URL}/auth/login`, user);
  }
  static async checkAuth() {
    console.log(config())
    return axios.get(`${BASE_URL}/auth/user`, config());
  }
  static async logout() {
    return axios.delete(`${BASE_URL}/auth/logout`, config());
  }
}
