const rev = require('./rev');

test('reverse string', () => {
  expect(rev('canada')).toBe('adanac');
});