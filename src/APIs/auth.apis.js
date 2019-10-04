import API from "../utils/API";
import { LOGIN_URL } from './apiUrls';
import { REGISTER_URL } from './apiUrls';

export const loginAPI = (user) => (API.post(LOGIN_URL, {
    users: user
}));

export const registerAPI = (user) => (API.post(REGISTER_URL, {
    users: user
}));