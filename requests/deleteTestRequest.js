import http from 'k6/http';
import { HEADERS } from '../Config/constants.js';
import { URLs } from '../Config/Urls.js';

export function deleteTestimonialRequest(token,testimonialId){
    const url = `${URLs.testimonials}/${testimonialId}`;
    const headers = token ? {...HEADERS.json,Authorization:`Bearer ${token}` }:HEADERS.json;

    return http.del(url,{headers});
}