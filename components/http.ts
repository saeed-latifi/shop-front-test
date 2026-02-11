import { apiURL } from "@/config";
import axios from "axios";

export const http = axios.create({
	baseURL: apiURL,
	headers: { "Content-Type": "application/json" },
});
