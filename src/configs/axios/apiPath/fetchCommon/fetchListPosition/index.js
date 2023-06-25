import { API } from "../../../API";

export const getListPosition = (params) => 
  API.get('positions', {params: params});
