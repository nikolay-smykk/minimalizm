type QueriesObj = {
    [key: string]: string;
};

export const serialize = (obj: QueriesObj): string => {
    if (!obj) {
        return "";
    }
    const str: string[] = [];
    Object.entries(obj).forEach(([key, value]: [string, string]) => {
        if (value) {
            str.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
        }
    });

    return `?${str.join("&")}`;
};
