export function generateUniqueId() {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const numbers = '0123456789'
  let id = ''

  for (let i = 0; i < 3; i++) {
    id += letters[Math.floor(Math.random() * letters.length)]
    id += numbers[Math.floor(Math.random() * numbers.length)]
  }

  return id
}
