import http from 'k6/http' ;
import { HEADERS } from '../Config/constants.js';
import { URLs } from '../Config/Urls.js';


export function addTestimonial(token,payload){
    const url = URLs.testimonials;
    const body= JSON.stringify(payload);
    const headers = token ? {...HEADERS.json,Authorization:`Bearer ${token}` }:HEADERS.json;
    

    return http.post(url,body,{headers});
}