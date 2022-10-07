import type { AxiosInstance, AxiosInterceptorManager, AxiosRequestConfig, AxiosResponse } from 'axios';
import { ResponseData } from 'apis';

// export const API_DOMAIN = 'https://jsonplaceholder.typicode.com';

export class ApiError extends Error {
  data: ResponseData;
  constructor(message: string, data: ResponseData) {
    super(message);
    this.name = 'BackhrowError';
    this.data = data;
  }
}
export interface ResponseTime {
  startTime: Date;
  // endTime: Date | undefined;
}

export type StringifiedResponseTime = string;

export interface CustomInstance extends AxiosInstance {
  interceptors: {
    request: AxiosInterceptorManager<AxiosRequestConfig<ResponseTime>>;
    response: AxiosInterceptorManager<AxiosResponse<ResponseData, StringifiedResponseTime>>;
  };
}
