import API from "../utils/API";
import { TASK_URL } from '../APIs/apiUrls';

export const addTaskAPI = (title, description) => (API.post(TASK_URL, {
    todolist: {
        title,
        description
    }
}, {
        headers: {
            "x-access-token": sessionStorage.getItem("token")
        }
    }));