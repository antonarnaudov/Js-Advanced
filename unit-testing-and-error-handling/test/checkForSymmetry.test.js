const isSymmetric = require('../symmetry')
const expect = require('chai').expect

describe('Symmetry function tests', function() {
    it('takes array as argument', function() {
        expect(isSymmetric([])).to.be.true
    })

    it('takes != array as argument', function() {
        expect(isSymmetric(1)).to.be.false
        expect(isSymmetric('1')).to.be.false
        expect(isSymmetric({})).to.be.false
    })

    it('takes symmetric array as argument', function() {
        expect(isSymmetric([1, 1])).to.be.true
        expect(isSymmetric([1, 2, 2, 1])).to.be.true
        expect(isSymmetric(['1', '1'])).to.be.true
        expect(isSymmetric([
            [],
            []
        ])).to.be.true
        expect(isSymmetric([
            [1],
            [1]
        ])).to.be.true
    })

    it('takes ASYMMETRIC array as argument', function() {
        expect(isSymmetric([1, 2])).to.be.false
        expect(isSymmetric([1, '1'])).to.be.false
        expect(isSymmetric([1, 2, 3, 4])).to.be.false
        expect(isSymmetric(['1', '2'])).to.be.false
        expect(isSymmetric([
            [],
            [1]
        ])).to.be.false
        expect(isSymmetric([
            [1],
            [2]
        ])).to.be.false
    })
})