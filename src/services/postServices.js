import axios from "axios";
import config from "./config";

const BASE_URL = "localhost:3000/";

export default class PostService {
  static async createPost(postData) {
    return axios.post("/posts", postData, config);
  }

  static async getPosts() {
    return axios.get("http://localhost:3000/api/v1/posts", config);
  }

  static async updatePost(id, postData) {
    return axios.patch(`/posts/${id}`, postData, config);
  }

  static async likePost(id) {}

  static async createComment() {}

  static async getPostById(id) {
    return axios.get(`http://localhost:3000/api/v1/posts/${id}`, config);
  }
}
