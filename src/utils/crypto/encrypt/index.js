import { AES } from "crypto-js";

const SECRET_KEY = process.env.REACT_APP_SECRET_KEY;

const EncryptedAES = (dataResponse) => {
    return AES.encrypt(JSON.stringify(dataResponse), SECRET_KEY).toString();    
}

export default EncryptedAES;