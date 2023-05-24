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

  static async getUserPosts(username) {
    return axios.get(`${BASE_URL}/users/${username}/posts`, config());
  }

  static async updatePost(author, id, postData) {
    return axios.patch(`${BASE_URL}/users/${author}/posts/${id}`, postData, config());
  }

  static async deletePost(author, id) {
    return axios.delete(`${BASE_URL}/users/${author}/posts/${id}`, config());
  }

  static async likePost(author, id) {
    return axios.post(
      `${BASE_URL}/users/${author}/posts/${id}/like`,
      {},
      config()
    );
  }

  static async dislikePost(author, id) {
    return axios.post(
      `${BASE_URL}/users/${author}/posts/${id}/dislike`,
      {},
      config()
    );
  }

  static async addComment(author, post_id, comment_data) {
    return axios.post(
      `${BASE_URL}/users/${author}/posts/${post_id}/comments`,
      comment_data,
      config()
    );
  }

  static async getPostById({ username, id }) {
    return axios.get(`${BASE_URL}/users/${username}/posts/${id}`, config());
  }
}
