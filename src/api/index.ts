import axios from "axios";

/*
 * ===================================
 * AXIOS CONFIGURATION
 * ===================================
 */
export const envURL = "";
export const baseURL = `${envURL}/api`;

const axiosConfig = {
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 60000,
};

/*
 * ===================================
 * END OF AXIOS CONFIGURATION
 * ===================================
 */

const apiPublic = axios.create(axiosConfig);
const apiPrivate = axios.create(axiosConfig);
const bearer = localStorage.getItem("token");

apiPrivate.interceptors.request.use(
  async (requestConfig) => {
    if (bearer) {
      requestConfig.headers.Authorization = `Bearer ${bearer}`;
    }

    return requestConfig;
  },
  async (err) => {
    return Promise.reject(err);
  }
);

apiPrivate.interceptors.response.use(
  async (requestConfig) => {
    requestConfig.headers = {
      Authorization: `Bearer ${bearer}`,
    };

    return requestConfig;
  },
  async (error: any) => {
    // 403 unauthorized if need to refresh a token
    return Promise.reject(error);
  }
);

export { apiPrivate, apiPublic };
