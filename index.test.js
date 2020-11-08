const { it, expect } = require('@jest/globals');
const {sum, reverse, evenNumber} = require('./index');

describe('test for index.js file', () => {
    it('should return sum of numbers', () => {
        const result = sum(1, 2);
        expect(result).toBe(3);
    }),
    it('shold be reverse string', () => {
        const result = reverse('abc');
        expect(result).toBe('cba');
    }),
    it('shoult return one of answers', () => {
        const result1 = evenNumber(3);
        expect(result1).toBe('3 - нечётное число');
    }),
    it('should be even number',() => {
        const result2 = evenNumber(2);
        expect(result2).toBe('2 - чётное число');
    }),
    it('should be not a number',() => {
        const result3 = evenNumber('ghui');
        expect(result3).toBe('ghui - не является числом')
    })
});