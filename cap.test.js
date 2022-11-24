const cap = require('./cap');

test('capitalize string', () => {
  expect(cap('canada')).toBe('Canada');
});