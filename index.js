module.exports = function numeronyms (input) {
  if (!input) return null
  if (typeof input !== 'string') return null
  if (input.length <= 3) return input

  return input.charAt(0) + String(input.length - 2) + input.charAt(input.length - 1)
}