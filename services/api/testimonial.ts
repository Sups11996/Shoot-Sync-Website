import axiosClient from "../axiosClient";

export interface Testimonial {
  id: number;
  name: string;
  position: string;
  description: string;
  image: string;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

interface PaginatedResponse {
  status: string;
  data: {
    count: number;
    total_pages: number;
    current_page: number;
    next_page: number | null;
    previous_page: number | null;
    data: Testimonial[];
  };
  message: string;
}

export const testimonialApi = {
  getTestimonials: async (): Promise<Testimonial[]> => {
    const res = (await axiosClient.get("/testimonial")) as unknown as PaginatedResponse;
    return res?.data?.data ?? [];
  },
};

export default testimonialApi;