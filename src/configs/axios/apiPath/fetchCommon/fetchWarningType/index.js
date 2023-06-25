import { API } from "../../../API";

export const getListWarningTypes = (params) => 
  API.get('warnings/types', {params: params});