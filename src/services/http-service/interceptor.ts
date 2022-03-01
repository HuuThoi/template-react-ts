import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import setHeader from "services/auth-services/auth-header";
import { store } from 'my-redux/store';
import { AuthenticationActionType } from "my-redux/action-types/authentication.action-type";

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
    //console.info(`[request] [${JSON.stringify(config)}]`);
    config.headers!.Authorization = setHeader();
    return config;
}

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
   // console.error(`[request error] [${JSON.stringify(error)}]`);
    return Promise.reject(error);
}

const onResponse = (response: AxiosResponse): AxiosResponse => {
    //console.info(`[response] [${JSON.stringify(response)}]`);
    return response.data ;
}

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
    console.error(`[response error] [${JSON.stringify(error)}]`);
    switch (error.response?.status) {
        case 401:
          store.dispatch({ type: AuthenticationActionType.UNAUTHENTICATED });
          break;
        default:
          break;
      }
    return Promise.reject(error);
}

export function setupInterceptorsTo(axiosInstance: AxiosInstance): AxiosInstance {
    axiosInstance.interceptors.request.use(onRequest, onRequestError);
    axiosInstance.interceptors.response.use(onResponse, onResponseError);
    return axiosInstance;
}