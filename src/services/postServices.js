import axios from "axios";
import { BASE_URL } from "../utils/constants";
import config from "./config";

export default class PostService {
  static async createPost(postData) {
    return axios.post(`${BASE_URL}/posts`, postData, config());
  }

  static async getPosts() {
    return axios.get(`${BASE_URL}/posts`, config());
  }

  static async updatePost(id, postData) {
    return axios.patch(`${BASE_URL}/posts/${id}`, postData, config());
  }

  static async deletePost(id) {
    return axios.delete(`${BASE_URL}/posts/${id}`, config());
  }

  static async likePost(id) {
    return axios.post(`${BASE_URL}/posts/${id}/like`, {}, config());
  }

  static async dislikePost(id) {
    return axios.post(`${BASE_URL}/posts/${id}/dislike`, {}, config());
  }

  static async addComment(post_id, comment_data) {
    return axios.post(
      `${BASE_URL}/posts/${post_id}/comments`,
      comment_data,
      config()
    );
  }

  static async getPostById(id) {
    return axios.get(`${BASE_URL}/posts/${id}`, config());
  }
}
