import { API } from "../../../API";

export const getEmployeePerformance = (params) => API.get(`employees/dashboard`, { params: params });

