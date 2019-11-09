const calculator = require('./calculator')

describe('add function', () => {
    test('should return 5 if a = 3 and b = 2', () => {
        const a = 3;
        const b = 2;
        const expected = 5;
        const result = calculator.add(a, b);
        expect(result).toBe(expected)
    })

})