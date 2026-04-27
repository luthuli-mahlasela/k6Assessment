import http from 'k6/http';
import { PAYLOADS } from '../data/payloads.js';
import { loginRequest } from '../requests/authRequest.js';
import { TEST_Config } from '../Config/constants.js';
import { sleep } from 'k6';

// import http from 'k6/http';
// import { PAYLOADS } from '../data/payloads.js';
// import { loginRequest } from '../requests/authRequest.js';
// import { TEST_Config } from '../Config/constants.js';
// import { sleep } from 'k6';
 

export const options={
    vus: TEST_Config.vus,
    duration: TEST_Config.duration
    
};

export default function loginTest(){
    const response = loginRequest(PAYLOADS.login);
    console.log(`Response status: ${response}`);
    console.log(`Response body: ${response.body}`);


}