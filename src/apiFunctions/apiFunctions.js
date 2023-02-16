async function get(endpoint) {
    return await request('GET', endpoint, null)
}

async function post(endpoint, data) {
    return await request('POST', endpoint, data)
}

async function patch(endpoint, data) {
    return await request('PATCH', endpoint, data)
}


async function request(method, endpoint, data) {
    const opts = {
        headers: {
            'Content-Type': 'application/json'
        },
        method
    }

    if (method.toUpperCase() !== 'GET') {
        opts.body = JSON.stringify(data)
        console.log(opts.body)
    }
    
    const response = await fetch(`http://localhost:3000/${endpoint}`, opts)

    return response.json()
}

async function getPrompts(prompt) {
    const res = await get(prompt)
    return res
}

export {
    getPrompts,
    post,
    patch
}