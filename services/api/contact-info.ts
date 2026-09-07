import axiosClient from "../axiosClient";

export interface ContactInfo {
  id: number;
  phone_number: string;
  email: string;
  address: string;
  facebook_link: string;
  youtube_link: string;
  instagram: string;
  tiktok: string;
}

interface NestedResponse {
  status: string;
  data: {
    count: number;
    total_pages: number;
    current_page: number;
    next_page: number | null;
    previous_page: number | null;
    data: ContactInfo[];
  };
}

export const contactInfoApi = {
  getContactInfo: async (): Promise<ContactInfo[]> => {
    const res = (await axiosClient.get(
      "/contact_info",
    )) as unknown as NestedResponse;
    return res?.data?.data ?? [];
  },
};

export default contactInfoApi;
