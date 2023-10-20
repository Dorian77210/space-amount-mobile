import axios from 'axios';

const instance = axios.create({
    baseURL: "http://192.168.1.28:3009/",
    httpsAgent: {
        rejectUnauthorized: false,
    }
});

export default instance;