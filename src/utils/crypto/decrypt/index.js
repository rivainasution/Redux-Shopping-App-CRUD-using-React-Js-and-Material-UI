import { AES } from "crypto-js";

const SECRET_KEY = process.env.REACT_APP_SECRET_KEY;

const DecryptedAES = (dataResponse) => {
    return AES.decrypt(dataResponse, SECRET_KEY);    
}

export default DecryptedAES;