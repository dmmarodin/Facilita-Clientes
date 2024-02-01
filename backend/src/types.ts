export type ResultObject<T> = (ResultError | ResultSuccess<T>);

type ResultError = {
    error: true,
    error_code: number,
    message: string
}

type ResultSuccess<T> = {
    error: false,
    data: T
}