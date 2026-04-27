import http from 'k6/http';
import { HEADERS } from '../Config/constants.js';
import { URLs } from '../Config/Urls.js';

export function updatetesimonialRequest (token,payload){
     const url = URLs.UpdateTestimonials;
     const headers = token ?{...HEADERS.json,Authorization:`Bearer ${token}`}:HEADERS.json;
     const body= JSON.stringify(payload);

     return http.put(url,body,{headers});

}