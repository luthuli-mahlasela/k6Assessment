import http from 'k6/http';
import { HEADERS } from '../Config/constants.js';
import { URLs } from '../Config/Urls.js';

export function updatetesimonialRequest (token,payload){
     const url = URLs.UpdateTestimonials;
     const body= JSON.stringify(payload);
     const headers = token ?{...HEADERS.json,Authorization:`Bearer ${token}`}:HEADERS.json;
     

     return http.put(url,body,{headers});

}