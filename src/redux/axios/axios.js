import axios from "axios";

const PORTAL_URL = `http://localhost:3000`

export const portalAxios = axios.create({
  baseURL: PORTAL_URL,
  timeout: 1000000,
  headers: {
    "Content-Type": "application/json",
  },
});
