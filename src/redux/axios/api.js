import {
    portalAxios as authaxios,
} from "./axios";

export const sigupApi = (url, params) => {
    return authaxios.post(url, params);
};

export const signinApi = (url) => {
    return authaxios.get(url);
};


export const authorNameApi = (url) => {
    return authaxios.get(url);
};

export const saveblogApi = (url, params) => {
    return authaxios.post(url, params);
};

export const getblogApi = (url) => {
    return authaxios.get(url);
};