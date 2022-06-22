import type { RequestHandler } from "@sveltejs/kit"

export const get: RequestHandler = async () => {
    return {
        status: 200,
        body: {
            user: {
                name: 'make',
                age: 30
            }
        }
    }
}

export const post: RequestHandler = async ({request}) => {
    const form = await request.formData()
    const username: string = form.get('username')?.toString()
    const password: string = form.get('password')?.toString()

    console.log(username, password)

    if(username === 'admin' && password === 'admin') {
        return {
            status: 400,
            body: {
                error: 'Invalid username or password'
            }
        }
    }

    // const req = await fetch ('api.url', {
    //     method: 'POST',
    //     headers: {'content-type': 'application/json'},
    //     body: JSON.stringify({
    //         username,
    //         password
    //     }),
    // })
    // const res = await req.json()

    return {
        status: 302,
        headers: {
            location: '/dashboard'
        }
    }
}