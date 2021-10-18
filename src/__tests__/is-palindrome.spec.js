const { isPalindrome } = require('../is-palindrome');

it.each([
  'Боб',
  'топот',
  'Saippuakivikauppias',
  'Лёша на полке клопа нашёл',
  'А роза упала на лапу Азора.',
  'Я иду съ мечемъ судия',
  'Я — арка края',
])('`%s` should be palindrome', (str) => {
  expect(isPalindrome(str)).toBe(true);
});

it.each(['человек', 'Swiss knife', 'Ёжик'])('`%s` should NOT be palindrome', (str) => {
  expect(isPalindrome(str)).toBe(false);
});
