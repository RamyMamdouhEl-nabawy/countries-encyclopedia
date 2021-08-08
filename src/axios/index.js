import axios from "axios";
import config from "../config";

// This method was built for creating a centralized instance for Axios usage.
export default axios.create({
	baseURL: config.baseUrl
});
