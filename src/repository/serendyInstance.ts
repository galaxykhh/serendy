import axios from "axios";
import { BASE_URL } from '../config'; // eslint-disable-line

export const serendyInstance = axios.create({
    baseURL: 'http://localhost:8000',
});

serendyInstance.defaults.headers.common['authorization'] = localStorage.getItem('SerendyToken');