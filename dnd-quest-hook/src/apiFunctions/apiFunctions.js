async function get(endpoint) {
    return await request('GET', endpoint, null)
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
    }
    
    const response = await fetch(`http://localhost:3000/${endpoint}`, opts)

    return response.json()
}

async function getPrompts(prompt) {
    const res = await get(prompt)
    return res
}

export {
    getPrompts
}