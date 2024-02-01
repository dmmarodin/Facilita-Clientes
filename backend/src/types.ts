export type ResultObject<T> = (ResultError | ResultSuccess<T>);

export type ResultError = {
    error: true,
    error_code: number,
    message: string
}

export type ResultSuccess<T> = {
    error: false,
    data: T
}

export function error(code: number, message: string): ResultError {
    return {
        error: true,
        error_code: code,
        message
    }
}

export function success<T>(data: T): ResultSuccess<T> {
    return {
        error: false,
        data
    }
}