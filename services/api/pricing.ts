import axiosClient from "../axiosClient";

export interface Subscription {
  subscription: string;
  description: string;
  short_description: string;
  amount: string;
}

// NOTE: axiosClient's interceptor already unwraps response.data once,
// so this type reflects the actual runtime shape returned by getPricing(),
// not the raw { status, data, message } envelope from the server.
export interface PricingApiResponse {
  count: number;
  total_pages: number;
  current_page: number;
  next_page: number | null;
  previous_page: number | null;
  data: Subscription[];
}

export const api = {
  // GET /pricing
  getPricing: async (): Promise<PricingApiResponse> => {
    const response = await axiosClient.get<PricingApiResponse>("/pricing");
    return response.data;
  },

  // GET /pricing/:id
  getPricingById: async (id: string) => {
    const response = await axiosClient.get(`/pricing/${id}`);

    return response.data;
  },
};

export default api;