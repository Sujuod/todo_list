import API from "../utils/API";
import { TASK_URL } from '../APIs/apiUrls';

export const deleteAPI = (item_id) => (API.delete(`${TASK_URL}/${item_id}`, {
    headers: {
        "x-access-token": sessionStorage.getItem("token")
    }
}));