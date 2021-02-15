const { sum } = require('../universal')
const { expect } = require('chai')


describe('Sum function', () => {
    it('should sum', () => {
        expect(sum(1, 2)).to.equal(3)
    })

    it('fails with invalid values', () => {
        expect(sum('a', 'b')).to.be.NaN
    })
})