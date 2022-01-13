import { checkStatus } from "./checkStatus";
import { serialize } from "./serialize";

import { parseRequestBody } from "./parseRequestBody";
import {
    loggerFailedResponse,
    loggerRequest,
    loggerSuccessResponse,
} from "./logger";

export function request(
    url: string,
    method: string,
    data?: any,
    query?: any,
    headers: any = {},
) {
    return new Promise((resolve, reject) => {
        let queryStr = "";
        if (query) {
            queryStr = serialize(query);
        }

        const fullUrl = `${process.env.REACT_APP_DOMAIN}${url}`;
        loggerRequest({
            url: `${url}${queryStr}`,
            method,
            body: data,
            headers: [],
            fullUrl,
        });
        fetch(fullUrl, {
            method: method || "GET",

            body: parseRequestBody(method, data),
        })
            .then(checkStatus())
            .then(async (response) => {
                const result = response.json ? await response.json() : response;
                loggerSuccessResponse({
                    method,
                    status: response.status,
                    fullUrl,
                    response: result,
                    url: `${url}${queryStr}`,
                });
                return result;
            })
            .then(resolve)
            .catch((error) => {
                throw error;
            })
            .catch((err) => {
                loggerFailedResponse({
                    method,
                    status: err.status,
                    fullUrl,
                    message: err.message,
                    url: `${url}${queryStr}`,
                    err,
                });
                reject(err);
            });
    });
}
