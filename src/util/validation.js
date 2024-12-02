export function isEmail(value){
    return value.includes('@')
}

export function isNoEmpty(value){
    return value.trim() !== '';
}

export function isAPassword(value){
    return value.length >= 8
}

