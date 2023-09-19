import axios from "axios";

export const appAxios = axios.create({
    baseURL: "https://todo-server-programming-agency.vercel.app"
})