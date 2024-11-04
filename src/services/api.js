import axios from "axios";

export const api = axios.create({
    baseURL: "https://backend-sistema-de-tarefas.onrender.com"
});