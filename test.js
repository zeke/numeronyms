const numeronym = require('.')

test('is a function', () => {
  expect(typeof numeronym).toBe('function')
})

test('numerizes words', () => {
  expect(numeronym('internationalization')).toBe('i18n')
  expect(numeronym('localization')).toBe('l10n')
  expect(numeronym('localisation')).toBe('l10n')
})

test('handles non-string inputs', () => {
  expect(numeronym()).toBe(null)
  expect(numeronym('')).toBe(null)
  expect(numeronym({foo: 'bar'})).toBe(null)
  expect(numeronym(123)).toBe(null)
})

test('returns input string if too short', () => {
  expect(numeronym('hi')).toBe('hi')
  expect(numeronym('cat')).toBe('cat')
})
