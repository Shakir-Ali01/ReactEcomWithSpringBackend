import axios from "axios";
import { BASE_URL } from "./helperservice";

export const publicAxios=axios.create({
    baseURL:BASE_URL,
});
