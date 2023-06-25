import { API } from "../../../API";

export const getListEmployee = (params) => 
  API.get('employee-awards/list-employee', {params: params});