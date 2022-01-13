export interface SuccessResponse {
    url: string;
    fullUrl: string;
    status: number;
    method: string;
    response: unknown;
}

export interface FailedResponse {
    url: string;
    method: string;
    fullUrl: string;
    status: number;
    message: string;
    err: Error;
}
