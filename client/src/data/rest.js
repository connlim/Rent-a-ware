export function fetchInternal(url, options={}) {
    options.credentials = "include";
    //TODO add prefix/port here
    return fetch('http://localhost:3000' + url, options);
}

export function get(url, options={}) {
    options.method = "GET";
    return fetchInternal(url, options);
}

export function post(url, body, options={}) {
    options.method = "POST";
    if(body !== undefined)
        options.body = JSON.stringify(body);
    return fetchInternal(url, options);
}