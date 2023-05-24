import axios from "axios";
import { BASE_URL } from "../utils/constants";
import config from "./config";

export default class UserService {
  static async followUser(username) {
    return axios.post(`${BASE_URL}/users/${username}/follow`, {}, config());
  }

  static async unfollowUser(username) {
    return axios.delete(`${BASE_URL}/users/${username}/unfollow`, config());
  }
}
