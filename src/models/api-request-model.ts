export interface ApiRequestModel<T = any> {
    isLoading: boolean;
    isV1: boolean;
    payload: T;
    headers: {
        [key: string]: string | number;
    };
    isCache: boolean;
    url: string;
    toResponse: Function;
    toRequest: Function;
}
