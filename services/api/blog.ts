import axiosClient from "../axiosClient";

export const api = {
  // GET /blog
  getBlogs: (params = {}) => axiosClient.get("/blog", { params }),

  // GET /blog/:id
  getBlogById: (id: string) => axiosClient.get(`/blog/${id}`),
};

export default api;