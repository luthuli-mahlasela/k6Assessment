import { sleep } from 'k6';
import { TEST_Config } from '../Config/constants';
import { PAYLOADS } from '../data/payloads';
import { getProfile } from '../requests/profileRequest';
import { loginRequest } from '../requests/authRequest';
import { addTestimonial } from '../requests/testimonialRequest';

export const options ={
    vus: TEST_Config.vus,
    duration:TEST_Config.duration,
};

export default function(){
    // const loginRequestPayload= loginRequest(PAYLOADS.login);
    // const body = loginRequestPayload.json();
    // const token = body.data.token;
        const testimonialRequestPayload=addTestimonial(PAYLOADS.testimonials);
        const body = testimonialRequestPayload.json();
        const token = body.data.token;
        const response = addTestimonial(token);


}