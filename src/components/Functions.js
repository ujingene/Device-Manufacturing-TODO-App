
export function getDevices() {
    return fetch('http://localhost:8000/api/smart-device', {
            method: 'GET',
            mode: 'CORS'
        }).then(res => res.json())
        .catch(err => err);
}

export function fetchDevice(serial) {
    return fetch('http://localhost:8000/api/smart-device/' + serial, {
            method: 'GET',
            mode: 'CORS'
        }).then(res => res.json())
        .catch(err => err);
}

export function createDevice(data) {
    return fetch('http://localhost:8000/api/smart-device', {
        method: 'POST',
        mode: 'CORS',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        return res;
    }).catch(err => err);
}

export function updateDevice(serial, data) {
    return fetch('http://localhost:8000/api/smart-device/' + serial, {
        method: 'PUT',
        mode: 'CORS',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        return res;
    }).catch(err => err);
}

export function deleteDevice(serial) {
    return fetch('http://localhost:8000/api/smart-device/' + serial, {
        method: 'DELETE',
        mode: 'CORS'
    }).then(res => {
        return res;
    }).catch(err => err);
}