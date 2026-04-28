import { sleep } from 'k6';
import { TEST_Config } from '../Config/constants.js';
import { PAYLOADS } from '../data/payloads.js';
import { getProfile } from '../requests/profileRequest.js';
import { loginRequest } from '../requests/authRequest.js';
import { addTestimonial } from '../requests/testimonialRequest.js';
import { updatetesimonialRequest } from '../requests/updateTestRequest.js';

export const options ={
    vus: TEST_Config.vus,
    duration: TEST_Config.duration
}

export default function (){
    // const UpdtTestPayload = updatetesimonialRequest(PAYLOADS.updatetesimonial);
    // const body = UpdtTestPayload.json();
    const testimonialRequestPayload=addTestimonial(PAYLOADS.testimonials);
    const body = testimonialRequestPayload.json();
    const token = body.data.token;
    const id = body.data.Id;
    const response = updatetesimonialRequest(token,id);

}
