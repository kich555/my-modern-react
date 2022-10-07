import axiosClient from 'axios';
import { omitBy } from 'lodash-es';
import type { AxiosError, AxiosResponse, AxiosRequestConfig, AxiosRequestHeaders } from 'axios';

import { ApiError, API_DOMAIN, CustomInstance, ResponseTime, StringifiedResponseTime } from './config';
import { ResponseData } from 'apis';
import { HTTP_ERROR_STATUS } from './constants/status';
import { getRTT, handleUpdateRTT } from './RTTHandler';

interface RequestConfig extends AxiosRequestConfig {
  headers: AxiosRequestHeaders;
}

const defaultConfig: RequestConfig = {
  baseURL: API_DOMAIN,
  // timeout: 2500,
  withCredentials: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
  // validateStatus: function (status) {
  //   return status < 500;
  // },
};

interface RequestParams {
  url: string;
  method?: 'get' | 'post';
  data?: Record<string, unknown>;
  config?: AxiosRequestConfig;
  specificInterceptor?: {
    request?: (config: AxiosRequestConfig<ResponseTime>) => void;
    response?: (response: ResponseData) => ResponseData;
  };
}

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  console.log('request', error.response?.status);

  if (error.request) {
    // 요청이 이루어 졌으나 응답을 받지 못했습니다.
  }
  return Promise.reject(error);
};

const onResponseError = (error: AxiosError) => {
  const { TIME_OUT } = HTTP_ERROR_STATUS;
  console.log('status', typeof error.code, error.code);
  console.log('response', error.response?.status);
  if (error.response) {
    // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
    if (error.response.status >= 500) {
      // 예상치 못한 에러입니다. global로 throw 합니다.
    }
  } else {
    console.log('it does not have response', error.request);
  }
  if (error.code === 'ECONNABORTED' || error.response?.status === TIME_OUT) {
    console.log('This is timeout error');
  }
  console.log('AxiosError-->', typeof error.response?.statusText, error.response?.statusText, error);
  return Promise.reject(error);
};

/**
 * @author kich555
 * @link https://blog.liufashi.top/2022/05/21/ts-axios/
 * @description 위 링크를 기반으로 조금씩 손본 custom request입니다.
 *
 * 구체적으로 타입을 보다 더 구체화하였고, 나만의 custom 타입, 로직들을 추가하였습니다.
 *
 * 긴 명령형 구조인게 마음에 들진 않지만, 현재까지는 특별한 개선방안이 떠오르지 않습니다
 *
 * 타입 구체화 등 리팩토링 할 부분들이 남아있으나,
 * 초기 기획과 구현은 끝났음으로 현재 버전을 초안으로 결정합니다.
 *
 */
const request = ({ method, url, data, config, specificInterceptor }: RequestParams): any => {
  const finalConfig: RequestConfig = { ...defaultConfig, ...config };
  const instance: CustomInstance = axiosClient.create(finalConfig);

  function onRequest(config: AxiosRequestConfig<ResponseTime>) {
    console.info(`[request] [${JSON.stringify(config)}]`);
    if (config.method === 'get') {
      config.timeout = 12000;
    }
    if (specificInterceptor?.request && typeof specificInterceptor.request === 'function') {
      return specificInterceptor.request(config);
    }

    const timeData = { startTime: new Date(), endTime: undefined };
    config.data = timeData;

    return config;
  }

  function onResponse(response: AxiosResponse<ResponseData, StringifiedResponseTime>) {
    // RTT를 기록하여 sentry or Monitoring service에 기록 (UX 최적화를 위한 데이터 수집)
    // default = session storage에 저장

    if (response.config.data && response.config.baseURL) {
      const { data, baseURL } = response.config;
      const duration = getRTT(data);
      duration && handleUpdateRTT({ duration, baseURL });
    }

    /**
    @author kich555
    @description 실질적인 업무레벨 api response에서는 row data를 따로 wrapping 할 Response객체가 있겠지만, 이 프로젝트에서 default tester 로 사용하고 있는 open source api에서는 row data를 바로 반환하므로 아래의 조건식을 주석처리 했습니다.
    */
    console.log('response', response);
    if (response.status === 200 || response.data.success) {
      if (specificInterceptor?.response && typeof specificInterceptor.response === 'function') {
        return specificInterceptor.response(response.data);
      }
      // return Promise.reject(new ApiError('this error was thrown by api', response.data));
      return response.data;
    } else {
      console.log((response.data && response.data.message) || 'Oops Something wrong');
      return Promise.reject(new ApiError('this error was thrown by api', response.data));
    }
  }

  //request interceptor
  instance.interceptors.request.use(onRequest, onRequestError);
  //response interceptor
  instance.interceptors.response.use(onResponse, onResponseError);

  const processedData = omitBy(data, v => v == null);

  return instance({
    method: method || 'get',
    url,
    data: method === 'post' && processedData,
  });
};
export default request;
