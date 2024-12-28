const {capitalize, reverse, calculator, caesarCipher, analyzeArray} = require('../src/index');

//test capitalize fn
describe('capitalize function', () => {
    test('capitalizes the first character of a string', () => {
        expect(capitalize('hello')).toBe('Hello');
    });

    test('works with a single character', () => {
        expect(capitalize('a')).toBe('A');
    });

    test('throws error on non-string input', () => {
        expect(() => capitalize(123)).toThrow('Input must be a non-empty string');
        expect(() => capitalize([])).toThrow('Input must be a non-empty string');
        expect(() => capitalize({})).toThrow('Input must be a non-empty string');
    });

    test('throws error on empty string or only spaces', () => {
        expect(() => capitalize('')).toThrow('Input must be a non-empty string');
        expect(() => capitalize('   ')).toThrow('Input must be a non-empty string');
    });
});

//test reverse fn
describe('reverse function', () => {
    test('reverses a string', () => {
        expect(reverse('hello')).toBe('olleh');
    });

    test('works with a single character', () => {
        expect(reverse('a')).toBe('a');
    });

    test('throws error on non-string input', () => {
        expect(() => reverse(123)).toThrow('Input must be a string');
        expect(() => reverse([])).toThrow('Input must be a string');
        expect(() => reverse({})).toThrow('Input must be a string');
    });
});


//test calculator object
describe('calculator object', () => {
    test('adds two numbers', () => {
        expect(calculator.add(1, 2)).toBe(3);
    });
    test('subtracts two numbers', () => {
        expect(calculator.subtract(5, 2)).toBe(3);
    });
    test('multiplies two numbers', () => {
        expect(calculator.multiply(3, 4)).toBe(12);
    });
    test('divides two numbers', () => {
        expect(calculator.divide(10, 2)).toBe(5);
    });
    test('handles division by zero', () => {
        expect(calculator.divide(10, 0)).toBe('Error: Division by zero');
    });
});

//test caesarCipher fn
describe('caesarCipher function', () => {
    test('shifts letters by a given factor', () => {
        expect(caesarCipher('hello', 3)).toBe('khoor');
    });
    test('wraps from z to a', () => {
        expect(caesarCipher('xyz', 3)).toBe('abc');
    });
    test('preserves case', () => {
        expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
    });
    test('preserves punctuation and spaces', () => {
        expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
    });
    test('handles negative shifts', () => {
        expect(caesarCipher('Khoor', -3)).toBe('Hello');
    });
});

//test analyzeArray fn
describe('analyzeArray function', () => {
    test('analyzes an array of numbers', () => {
        const result = analyzeArray([1, 8, 3, 4, 2, 6]);
        expect(result).toEqual({
            average: 4,
            min: 1,
            max: 8,
            length: 6,
        });
    });
    test('throws error on invalid input', () => {
        expect(() => analyzeArray('not an array')).toThrow('Input must be an array of numbers');
    });
});