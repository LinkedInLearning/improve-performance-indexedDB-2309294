async function fetchData(url) {
    const response = await fetch(url)
    const data = await response.json()
    return data
}

async function APIFetchData(url) {
    let data
    const response = await fetch(url)
    if (response.ok) {
        data = await response.json()
        sessionStorage.setItem(url, JSON.stringify(data))
    } else {
        data = JSON.parse(sessionStorage.getItem(url))
    }
    return data
}

async function localFetchData(url) {
    let data = JSON.parse(sessionStorage.getItem(url))
    if (data === null) {
        const response = await fetch(url)
        data = await response.json()
        sessionStorage.setItem(url, JSON.stringify(data))
    }
    return data
}