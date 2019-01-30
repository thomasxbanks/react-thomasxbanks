export const salt = () => {
  return Math.random().toString(36).substr(2, 9);
}

export const format = (input) => {
  return input.replace(/-/g, ' ')
}