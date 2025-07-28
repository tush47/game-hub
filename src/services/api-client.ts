import axios, { AxiosRequestConfig } from "axios";
const dotenv = require("dotenv");
export interface FetchResponse<T> {
  count: number;
  results: T[];
  next: string | null;
}
const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: process.env.PORT,
  },
});


class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance.get<FetchResponse<T>>(this.endpoint, config);
  }
}

export default APIClient;
