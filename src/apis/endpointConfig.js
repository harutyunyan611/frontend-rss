import {backendUrl} from "../config";

export const withBase = getURL => input =>
    `${backendUrl}${getURL(input)}`; //WARNING CHANGE THIS

export const feed = withBase(() => `/api/feed`);
