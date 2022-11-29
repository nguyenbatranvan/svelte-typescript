import axios from "axios";
import type {AxiosInstance, AxiosResponse} from "axios";
import type {ApiRequestModel} from "~/models/api-request-model";

export class BaseService {
    service: AxiosInstance;

    constructor() {
        const instance = axios.create({
            headers: {
                'content-type': 'application/json; charset=UTF-8'
            },
            timeout: 300000,
            timeoutErrorMessage: `Connection is timeout exceeded`
        });

        /**
         * Custom header before send request
         * */
        instance.interceptors.request.use(
            (config) => {
                return config;
            },
            (err) => {
                return Promise.reject(err);
            }
        );

        instance.interceptors.response.use(
            (config) => {
                return this.handleResponseSuccess(config)
            },
            async (err) => {
                this.handlerResponseError(err);
            }
        )
        this.service = instance;
    }

    private handleResponseSuccess(config: AxiosResponse) {
        const {data, config: _config} = config;
        const {params} = _config;
        if (params && params.offset && !data.length) {
            params.offset = params.offset - params.limit;
            return this.service(_config);
        }
        return Promise.resolve(this.parseData(config));
    }

    private handlerResponseError(err) {
        const {response} = err;
        if (response) {
            const {status: statusResponse} = response;
            if (statusResponse === 401) {
                // todo refresh token for later
                /**
                 * const token = await http(urlRefreshToken....);
                 * sessionStorage.setItem(...)
                 * if (token) {
                 *         config.headers = {
                 *           ...config.headers,
                 *           authorization: `Bearer ${token}`,
                 *         };
                 * }
                 * return instance(config);
                 * */
                setTimeout(() => {
                    // store.dispatch(setCondo(null));
                    window.location.href = '/login';
                }, 2000)
            } else {
                // todo if u want retry when api error
                // else {
                //     return instance(config)
                // }
                let error;
                if (response.data)
                    error = Error(response.data.message || response.data);
                throw error || err;
            }
        }
        // todo if u want retry when api error
        // else {
        //     return instance(config)
        // }
        // eslint-disable-next-line no-throw-literal
        throw {
            message: `Request failed! Please check the network connection again`
        }
    }


    /**
     * call request with method GET
     * @param {ApiRequestModel}
     * @return {Promise<PromiseState<T>>}
     * */
    get<T = any, K = any>({
                              url,
                              isLoading,
                              isV1,
                              payload,
                              headers,
                              toResponse
                          }: Partial<ApiRequestModel<K>>): Promise<PromiseState<T>> {
        // if (isLoading)
            // todo loading
            return this.service.get<T, PromiseState<T>>(url, {
                params: payload,
                headers: headers || {}
            }).then((res: PromiseState<T>) => {
                let dataMapping: any = res.data;
                return Promise.resolve({...res, data: dataMapping})
            });
    }

    /**
     * call request with method PUT
     * @param {Partial<ApiRequestModel>>}
     * @return {Promise<PromiseState<T>>}
     * */
    put<T = any, K = any>({
                              url,
                              isLoading,
                              isV1,
                              payload,
                              headers,
                              toRequest
                          }: Partial<ApiRequestModel<K>>): Promise<PromiseState<T>> {
        if (isLoading) {
        }
        if (toRequest) {
            payload = toRequest(payload);
        }
        return this.service.put(url, payload, {
            headers: headers || {}
        })
    }

    /**
     * call request with method POST
     * @param {Partial<ApiRequestModel>>}
     * @return {Promise<PromiseState<T>>}
     * */
    post<T = any, K = any>({
                               url,
                               isLoading,
                               isV1,
                               payload,
                               headers,
                               toRequest
                           }: Partial<ApiRequestModel<K>>): Promise<PromiseState<T>> {
        if (isLoading) {
        }
        if (toRequest) {
            payload = toRequest(payload);
        }
        return this.service.post<T, PromiseState<T>>(url, payload, {
            headers: headers || {}
        })
    }

    parseData(response: AxiosResponse): PromiseState {
        const {headers} = response;
        return {...response, totalItem: 0};
    }


    getById<T = any, K = any>({
                                  url,
                                  isLoading,
                                  isV1,
                                  payload,
                                  headers
                              }: Partial<ApiRequestModel<K>>): Promise<PromiseState<T>> {
        if (isLoading) {
        }
        return this.service.get<T, PromiseState<T>>(url, {
            params: payload,
            headers: headers || {}
        })
    }

    /**
     * call request with method DELETE
     * @param {Partial<ApiRequestModel>>}
     * @return {Promise<PromiseState<T>>}
     * */
    remove<T = any, K = any>({
                                 url,
                                 isLoading,
                                 isV1,
                                 payload,
                                 headers
                             }: Partial<ApiRequestModel<K>>): Promise<PromiseState<T>> {
        if (isLoading) {
        }
        return this.service.delete(url, {
            params: payload,
            headers: headers || {}
        })
    }
}

/**
 * create type response from axios
 * @return {AxiosResponse<T>>}
 * */
export interface PromiseState<T = unknown> extends AxiosResponse<T> {
    totalItem: number;
}

const BaseApi = new BaseService();
export default BaseApi;
