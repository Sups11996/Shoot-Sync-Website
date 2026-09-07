import axiosClient from "../axiosClient";

export const api = {
  // Get faqs
  getFaqs: (params = {}) => axiosClient.get("/faq", { params }),
};
