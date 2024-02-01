export type ResultObject<T> = (ResultError | ResultSuccess<T>);

type ResultError = {
    error: true,
    message: string
}

type ResultSuccess<T> = {
    error: false,
    data: T
}