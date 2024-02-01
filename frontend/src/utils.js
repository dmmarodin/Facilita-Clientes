let id = 0;

export function uuid(prefix) {
    id += 1;
    return prefix + id;
}
