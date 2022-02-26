export const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const trimString = (string, number, placeholder = '...') => {
  return string.length > number ? string.substr(0, number) + placeholder : string
}
