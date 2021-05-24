import axios from "axios";
import { BASE_URL } from '../config'; // eslint-disable-line

export const serendyInstance = axios.create({
    baseURL: BASE_URL,
});

serendyInstance.defaults.headers.common['authorization'] = localStorage.getItem('SerendyToken');