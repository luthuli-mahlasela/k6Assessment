import { HEADERS } from "../Config/constants";
import { URLs } from "../Config/Urls";
import http from 'k6/http';

export function getProfile(token) {
    const headers = token ? {...HEADERS.json, Authorization:`Bearer ${token}` }: HEADERS.json;
    //const headers = token ? { ...HEADERS.json, Authorization: `Bearer ${token}` } : HEADERS.json;
    return http.get(URLs.profile,{headers});
}