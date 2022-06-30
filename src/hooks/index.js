import { Handle } from "@sveltejs/kit";
import * as cookie from 'cookie';

export async function handle({ event, resolve }) {
    if(event.url.pathname.startsWith('/custom')) {
        return new Response('custom response');
    }

    const response = await resolve(event);
    return response;

    const cookies = cookie.parse(event.request.headers.get('cookie') || '');
    const jwt = cookies.jwt && Buffer.from(cookies.jwt, 'base64').toString('utf-8');

    event.locals.user = jwt ? JSON.parse(jwt) : null;
    return await resolve(event);
}