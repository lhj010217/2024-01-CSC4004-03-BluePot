import axios from 'axios';

export const API = axios.create({
  // baseURL 확정시 변경
    baseURL: "http://127.0.0.1:8000",
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});