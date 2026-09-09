import axiosClient from "../axiosClient";

export const api = {
  // GET /blog
   getBlogs: () => axiosClient.get("/blog", { params:{
    page_size:50
  }}),

  // GET /blog/:id
  getBlogById: (id: string) => axiosClient.get(`/blog/${id}`),
};

export default api;