import { AuthenticationKey } from "constants/authen-key";
import CryptoJS from "crypto-js";

export default function setHeader() {
    const token = localStorage.getItem("token");// CryptoJS.AES.decrypt(localStorage.getItem("token") ?? "", AuthenticationKey.IS_AUTHENTICATED)
    if (token)
        return `Bearer ${token}`;
    return '';
}

// export default function authHeader(token: string) {
//     if (token) {
//       axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//     } else {
//       delete axios.defaults.headers.common['Authorization'];
//     }
//   }