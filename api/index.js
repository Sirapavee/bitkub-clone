const BASE_URL = 'api.bitkub.com'

const extractQueryStr = (query) => {
    const keys = Object.keys(query)
    const queryStr = []

    keys.forEach((key) => {
        queryStr.push(`${key}=${query[key]}`)
    })

    return `?${queryStr.join('&')}`
}

const callApi = (path, query) => {
    const queryStr = query ? extractQueryStr(query) : ''
    const data = fetch(`https://${BASE_URL}${path}${queryStr}`)
                    .then((res) => res.json())
                    .then((data) => {
                        return data
                    })
    
    return data
}

export {
    BASE_URL,
    callApi,
    extractQueryStr,
}