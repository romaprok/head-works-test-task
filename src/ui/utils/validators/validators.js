export const required = value => {
    return value ? undefined : 'field is required'
}
export const cardRequired = value => {
    return value && value.length === 16 ? undefined : `length of card number must be 16 symbols`
}
