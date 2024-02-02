export function validatePhone(phone) {
    return /^\(?([1-9]{2})\)?[ ]?(?:[2-8]|9[0-9])[0-9]{3}\-?[0-9]{4}$/.test(
        phone
    );
}
