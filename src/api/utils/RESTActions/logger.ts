import { FailedResponse, SuccessResponse } from '../../../model/Response';
import { Request } from '../../../model/Request';

type ObjForLogger = {
  [key: string]: unknown;
};

const padString = (str = '') => {
  return `${str.padEnd(15)}`;
};

const logAsString = (obj: ObjForLogger) => {
  Object.entries(obj).forEach(([key, value]) => {
    console.log(
      `%c ${padString(key)} %c${value}`,
      'font-weight: bold',
      'font-weight: 200; color: #E88651'
    );
  });
};

const logAsTable = (obj: ObjForLogger) => {
  Object.entries(obj).forEach(([key, value]) => {
    if (value) {
      console.groupCollapsed(`%c ${padString(key)}`, 'font-weight: bold');
      console.log(value);
      console.groupEnd();
    } else {
      logAsString({ [key]: undefined });
    }
  });
};

const logAsObject = (obj: ObjForLogger) => {
  Object.entries(obj).forEach(([key, value]) => {
    if (value) {
      console.log(`%c ${padString(key)}`, 'font-weight: bold', value);
    } else {
      logAsString({ [key]: undefined });
    }
  });
};

export const loggerRequest = ({
  url,
  fullUrl,
  headers,
  body = {},
  method = 'GET',
}: Request) => {
  console.groupCollapsed(
    `%c API REQUEST  %c ${url}`,
    'background: #FFC737; color: black; font-weight: bold',
    'background: transparent; color: #FFC737;'
  );
  logAsString({ method });

  logAsTable({ body });

  logAsTable({ headers });

  logAsString({ fullUrl });

  console.groupEnd();
};

export const loggerSuccessResponse = ({
  url,
  fullUrl,
  method = 'GET',
  response,
  status,
}: SuccessResponse) => {
  console.groupCollapsed(
    `%c API RESPONSE %c ${url}`,
    'background: #29cb97; color: black; font-weight: bold',
    'background: transparent; color: #29cb97;'
  );

  logAsString({ method });

  logAsString({ status });

  logAsObject({ response });

  logAsString({ fullUrl });

  console.groupEnd();
};

export const loggerFailedResponse = ({
  url,
  fullUrl,
  method = 'GET',
  message,
  status,
  err,
}: FailedResponse) => {
  console.groupCollapsed(
    `%c API FAIL %c ${url} %c ${status}`,
    'background: #e52d2d; color: black; font-weight: bold',
    'background: transparent; color: #e52d2d;',
    'background: transparent; color: #1da1f2;'
  );

  logAsString({ method });

  logAsString({ status });

  logAsString({ message });

  logAsString({ fullUrl });

  logAsObject({ err });

  console.groupEnd();
};