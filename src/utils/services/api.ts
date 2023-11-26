import axios, { AxiosResponse } from "axios";

// const getServerToken = async () => {
//   const res = await axios.get('/api/auth/token')
//   return res.data
// }

const axiosInstanceConfig = {
  baseURL: `http://localhost:8000/`,
  timeout: 30000,
};

const axiosInstance = axios.create(axiosInstanceConfig);

// Add a request interceptor
axiosInstance.interceptors.request.use(
  async (config: any) => {
    // const oktaTokenStorage: OktaTokenStorage | null = JSON.parse(
    //   localStorage.getItem("okta-token-storage") ?? "{}"
    // );
    // const accessToken = oktaTokenStorage?.accessToken?.accessToken;

    // if (accessToken && !config.headers.Authorization)
    //   config.headers.Authorization = `Bearer ${accessToken}`;
    // if (config.data) {
    //   config.headers["Content-Type"] = "application/json";
    //   config.data = JSON.stringify(config.data);
    // }

    return config;
  },
  (error: any) => Promise.reject(error)
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: any) => {
    const originalConfig = error.config;
    if (originalConfig._retriedOnce) return Promise.reject(error);

    originalConfig._retriedOnce = true;
    try {
      return await axiosInstance(originalConfig); // Retry request on first error
    } catch (err: any) {
      return Promise.reject(err); // Return error if retry request has failed
    }
  }
);

export const api = axiosInstance;
