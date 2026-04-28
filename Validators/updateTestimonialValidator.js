import { check } from 'k6';
 
export function validateUpdateTestimonialResponse(response) {
    const body = response.json();
 
    const result = check(response, {
        'status is 200 or 201': (r) => r.status === 200 || r.status === 201,
 
        'success is true': () => body.success === true,
 
         
        'rating updated': () =>
            body.data && body.data.Rating === 1,
 
        'response time < 2s': (r) => r.timings.duration < 2000,
    });
 
    if (!result) {
        console.error('Update Testimonial validation failed');
        console.error(`Status: ${response.status}`);
        console.error(`Body: ${response.body}`);
    }
}
 