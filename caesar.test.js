import {caesar} from './caesar'

test('convert string', () => {
    expect(caesar('canada')).toBe('dbobeb');
});

test('convert string', () => {
    expect(caesar('united.States')).toBe('vojufe.Tubuft');
});

test('convert string', () => {
    expect(caesar('zorro')).toBe('apssp');
});
