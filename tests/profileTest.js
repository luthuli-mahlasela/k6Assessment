import {sleep} from 'k6';
import { TEST_Config } from '../Config/constants';
import { PAYLOADS } from '../data/payloads';
import { loginRequest } from '../requests/authRequest';
import { getProfile } from '../requests/profileRequest';

export const options = {
    vus: TEST_Config.vus,
    duration: TEST_Config.duration,
};

export default function(){
    const loginRequestPayload= loginRequest(PAYLOADS.login);
    const body = loginRequestPayload.json();
    const token = body.data.token;
    const response = getProfile(token);
    console.log(`Response status: ${response}`);
    console.log(`Response body: ${response.body}`);
}

