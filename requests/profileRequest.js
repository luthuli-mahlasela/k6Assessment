import http from 'k6/http';
import { URLs } from '../Config/Urls.js';
import { HEADERS } from '../Config/constants.js';



export function getProfile(token) {
    //const headers = token ? {...HEADERS.json, Authorization:`Bearer ${token}` }: HEADERS.json;
    const headers = token ? { ...HEADERS.json, Authorization: `Bearer ${token}` } : HEADERS.json;
    return http.get(URLs.profile,{headers});
}
