import API from "../utils/API";
import { LIST_URL } from './apiUrls';


export const fetchList = () => (API.get(LIST_URL, {
    headers: {
        "x-access-token": sessionStorage.getItem("token")
    }
}));
