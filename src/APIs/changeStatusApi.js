import API from "../utils/API";
import { TASK_URL } from '../APIs/apiUrls';

export const changeStatusAPI = (item_id, status) => (API.put(`${TASK_URL}/${item_id}`, {
    todolist: {
        status: status
    }
}, {
        headers: {
            "x-access-token": sessionStorage.getItem("token")
        }
    }));