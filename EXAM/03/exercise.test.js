const {expect, assert} = require('chai')
const numberOperations = require('./numberOperations')

describe("numberOperations Tests", function() {
    describe("Tests powNumber", function() {
        it("Pass 1", function() {
            expect(numberOperations.powNumber(1)).to.equal(1)
        });
        it("Pass 2", function() {
            expect(numberOperations.powNumber(2)).to.equal(4)
        });
    });

    describe("Tests numberChecker", function() {

        it("Passing string to be parsed, expecting error", function() {
            assert.throw(()=>numberOperations.numberChecker('s'), 'The input is not a number!')
        });

        it('Passing number below 100', function () {
            expect(numberOperations.numberChecker('1')).to.equal('The number is lower than 100!')
        });

        it('Passing number above 100', function () {
            expect(numberOperations.numberChecker(100)).to.equal('The number is greater or equal to 100!')
            expect(numberOperations.numberChecker(101)).to.equal('The number is greater or equal to 100!')
        });
    });

    describe("Tests sumArrays", function() {

        it("Test two equal arrays", function() {
            expect(numberOperations.sumArrays([1], [1])).to.deep.equal([2])
        });

        it("Test two non equal arrays", function() {
            expect(numberOperations.sumArrays([1, 2], [1])).to.deep.equal([2, 2])
        });
    });

});
