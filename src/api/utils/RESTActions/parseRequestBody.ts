export const parseRequestBody = (method: any, data: any) => {
    const parsedData = data?.hasOwnProperty("formData")
        ? data?.formData
        : JSON.stringify(data);
    return (method !== "GET" && data && parsedData) || undefined;
};
