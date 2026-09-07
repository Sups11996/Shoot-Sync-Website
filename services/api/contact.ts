import axiosClient from "../axiosClient";
export interface ContactPayload {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
}

function splitName(fullName: string) {
  const parts = fullName.trim().split(/\s+/);
  const first_name = parts[0] ?? "";
  const last_name = parts.slice(1).join(" ") || first_name;
  return { first_name, last_name };
}

function cleanPhone(phone: string) {
  return phone.replace(/[\s()-]/g, "");
}

function extractErrorMessage(err: unknown): string {
  const axiosErr = err as {
    response?: { data?: Record<string, string[] | string> };
    message?: string;
  };

  const data = axiosErr.response?.data;

  if (data && typeof data === "object") {
    const firstKey = Object.keys(data)[0];
    if (firstKey) {
      const val = data[firstKey];
      const msg = Array.isArray(val) ? val[0] : val;
      if (msg) return msg;
    }
  }

  return "Something went wrong. Please check your details and try again.";
}

export const contactApi = {
  submitContactUs: async (data: ContactPayload): Promise<ContactResponse> => {
    const { first_name, last_name } = splitName(data.fullName);

    const payload = {
      first_name,
      last_name,
      email: data.email,
      phone_number: cleanPhone(data.phone),
      company_name: data.companyName,
      subject: data.subject,
      message: data.message,
    };

    try {
      const res = await axiosClient.post("/contact_us", payload);
      return res as unknown as ContactResponse;
    } catch (err) {
      throw new Error(extractErrorMessage(err));
    }
  },
};

export default contactApi;