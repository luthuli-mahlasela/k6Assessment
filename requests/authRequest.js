import { URLs } from "../Config/Urls";
import http from 'k6/http';

export function loginRequest(payload) {
    const url = URLs.login;
    const body= JSON.stringify(payload);

    return post(url,body);

}