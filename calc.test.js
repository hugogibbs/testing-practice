import {add, substract, divide, multiply} from './calc'

test('add 2 numbers', () => {
    expect(add(4, 2)).toBe(6);
});

test('substract 2 numbers', () => {
    expect(substract(4, 2)).toBe(2);
});

test('divide 2 numbers', () => {
    expect(divide(4, 2)).toBe(2);
});

test('multiply 2 numbers', () => {
    expect(multiply(4, 2)).toBe(8);
});