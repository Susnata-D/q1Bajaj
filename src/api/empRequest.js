import axios from "axios";

const API = axios.create({ baseURL: "https://raw.githubusercontent.com/dixitsoham7/dixitsoham7.github.io/main/index.json" });

export const Employees = () => API.get();