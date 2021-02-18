const { sum } = require('../universal')
const { expect } = require('chai')

/**
 * Mocha makes the body, 'describe' and 'it' and runs the tests
 * 
 * Chai is the test syntax, instead of if, else we use
 * chai syntax to run the tests, expect().to.equal()
 */

describe('Sum function', () => {
    it('should sum', () => {
        expect(sum(1, 2)).to.equal(3)
    })

    it('should parse', () => {
        expect(sum('1', '2')).to.equal(3)
    })

    it('fails with invalid values', () => {
        expect(sum('a', 'b')).to.be.NaN
    })
})