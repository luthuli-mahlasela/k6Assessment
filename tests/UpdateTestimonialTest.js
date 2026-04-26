import { sleep } from "k6";
import { TEST_Config } from "../Config/constants";
import { PAYLOADS } from "../data/payloads";
import { getProfile } from "../requests/profileRequest";
import { loginRequest } from "../requests/authRequest";
import { addTestimonial } from "../requests/testimonialRequest";
import { updatetesimonialRequest } from "../requests/updateTestRequest";

export const options ={
    vus: TEST_Config.vus,
    duration: TEST_Config.duration
}

export default function (){
    // const UpdtTestPayload = updatetesimonialRequest(PAYLOADS.updatetesimonial);
    // const body = UpdtTestPayload.json();
    const testimonialRequestPayload=addTestimonial(PAYLOADS.testimonials);
    const body = testimonialRequestPayload.json();
    //const token = body.data.token;
    const id = body.data.Id;
    const response = updatetesimonialRequest(id);

}
