import axios from "axios";

const URL = process.env.REACT_APP_API_BASE_URL;

const FetchLogin = async (data) => {
    return axios.post(`${URL}login/admin`, data,
    {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }
  );
}

export default FetchLogin;