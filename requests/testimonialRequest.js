import { HEADERS } from "../Config/constants";
import { URLs } from "../Config/Urls";
import http from 'k6/http' ;

export function addTestimonial(token,payload){
    const url = URLs.testimonials;
    const headers = token ? {...HEADERS.json,Authorization:`Bearer ${token}` }:HEADERS.json;
    const body= JSON.stringify(payload);

    return http.post(url,{headers},body);
}