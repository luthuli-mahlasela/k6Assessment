import http from 'k6/http';
import { HEADERS } from '../Config/constants';
import { URLs } from '../Config/Urls';

export function updatetesimonialRequest (token,payload){
     const url = URLs.UpdateTestimonials;
     const headers = token ?{...HEADERS.json,Authorization:`Bearer ${token}`}:HEADERS.json;
     const body= JSON.stringify(payload);

     return put(url,body,{headers});

}