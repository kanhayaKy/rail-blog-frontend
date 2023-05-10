import axios from "axios";
import { BASE_URL } from "../utils/constants";
import config from "./config";

export default class AuthService {
  static async registerUser(user) {
    return axios.post(`${BASE_URL}/users`, user);
  }
  static async loginUser(user) {
    return axios.post(`${BASE_URL}/auth/login`, user);
  }
  static async checkAuth() {
    return axios.get(`${BASE_URL}/auth/user`, config());
  }
  static async logout() {
    return axios.delete(`${BASE_URL}/auth/logout`, config());
  }
}
