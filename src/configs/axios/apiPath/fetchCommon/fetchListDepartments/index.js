import { API } from "../../../API";

export const getListDepartments = (params) => 
  API.get('departments', {params: params});
