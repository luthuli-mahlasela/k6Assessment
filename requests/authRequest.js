import http from 'k6/http';
import { URLs } from '../Config/Urls.js';


export function loginRequest(payload){
    const url = URLs.login;
    const body= JSON.stringify(payload);

    return http.post(url,body);

}