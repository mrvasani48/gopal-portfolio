import { toast } from "react-toastify";

const BASE_URL = "https://example.com/api";

const apiCall = async (endpoint, method = "GET", body = null, headers = {}) => {
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, options);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Something went wrong");
    }

    return response.json();
  } catch (error) {
    toast.error("Something went wrong");
    console.error("API Error:", error);
    throw error;
  }
};

export default apiCall;
