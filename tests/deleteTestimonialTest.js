import { TEST_Config } from "../Config/constants.js";
import { deleteTestimonialRequest } from "../requests/deleteTestRequest.js";
import { loginRequest } from "../requests/authRequest.js";
//import { validateUpdateTestimonialResponse } from '../Validators/updateTestimonialValidator.js';
import { addTestimonial } from "../requests/testimonialRequest.js";
import { PAYLOADS } from "../data/payloads.js";


export const options = {
    vus: TEST_Config.vus,
    duration: TEST_Config.duration
};

export default function (){
     const loginRequestPayload= loginRequest(PAYLOADS.login);
    const body = loginRequestPayload.json();
    const token = body.data.token; 

    const createResponse = addTestimonial(token, PAYLOADS.testimonials);
    const testimonialId = createResponse.json().data.Id;    

    const response = deleteTestimonialRequest(token, testimonialId);

    console.log(`Response status: ${response.status}`);
    console.log(`Response body: ${response.body}`);         
 // validateUpdateTestimonialResponse(response);


}   