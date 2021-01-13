import Environment from './baseUrl';
import axios from 'axios';

const getHeaders = async (token) => {
    if (token) {
        return {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    }
    else {
        return {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization':  Environment.BasicToken,
        }
    }
}

const getProfilePictureUploadHeaders = (token) => {
    if (token) {
        return {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'multipart/form-data',
            'Accept': 'application/json',
        }
    }
    else {
        return {
            'Authorization':  Environment.BasicToken,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    }

}

var profilePictureOptions = {
    method: null,
    data: null,
    headers: null
}

var authOptions = {
    method: null,
    data: null,
    headers: getHeaders(),
    // timeout: 500
};

export const doPost = async (url, data, token) => {
    authOptions.method = 'POST';
    authOptions.data = data;
    authOptions.headers = await getHeaders(token)
    console.log({ authOptions });
    return axios(Environment.API_BASE_URL + url, authOptions)
}
export const doPatch = async (url, data, token) => {
    authOptions.method = "Patch";
    authOptions.data = data;
    authOptions.headers = await getHeaders(token)
    console.log({ authOptions });
    return axios(Environment.API_BASE_URL + url, authOptions)
}

export const doPut = async (url, data, token) => {
    authOptions.method = 'PUT'
    authOptions.data = data;
    authOptions.headers = await getHeaders(token)
    console.log({ authOptions });
    return axios(Environment.API_BASE_URL + url, authOptions)
}

export const doGet = async (url, token, data) => {
    authOptions.headers = await getHeaders(token)
    authOptions.method = 'GET'
    authOptions.data = null
    console.log({ authOptions });
    return axios(Environment.API_BASE_URL + url, authOptions)
}

export const doDelete = async (url, data, token) => {
    authOptions.method = 'DELETE'
    authOptions.data = data
    authOptions.headers = await getHeaders(token)
    return axios(Environment.API_BASE_URL + url, authOptions)
}

export const doPostProfilePictureUpload = (url, data, token) => {
    profilePictureOptions.method = 'POST'
    profilePictureOptions.data = data
    profilePictureOptions.headers = getProfilePictureUploadHeaders(token)
    console.log({ profilePictureOptions })
    return axios(Environment.API_BASE_URL + url, profilePictureOptions)
}

