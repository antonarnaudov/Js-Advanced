const {expect, assert} = require('chai')
const dealership = require('./dealership')

describe("Dealership Tests", function() {
    describe("newCarCost tests", function() {

        it("Passing only a price", function() {
            expect(dealership.newCarCost('', 1)).to.equal(1)
        });

        it('Passing a random car and a price', function() {
            expect(dealership.newCarCost('Audi', 1)).to.equal(1)
        })

        it('Passing an existing car and a price', function() {
            expect(dealership.newCarCost('Audi A4 B8', 20000)).to.equal(5000)
        })
    });

    describe("carEquipment tests", function() {
        it('Passing empty array', function () {
            expect(dealership.carEquipment([], [])).to.deep.equal([])
        });

        it('single element, single pick', function() {
            expect(dealership.carEquipment(['a'], [0])).to.deep.equal(['a'])
        });

        it('multiple elements, multiple pick', function() {
            expect(dealership.carEquipment(
                ['heated seats', 'sliding roof',
                    'sport rims', 'navigation'], [0, 2]))
                .to.deep.equal(['heated seats', 'sport rims'])
        });
    });

    describe("euroCategory tests", function() {

        it("Passing car euro 3", function() {
            expect(dealership.euroCategory(3))
                .to.equal('Your euro category is low,' +
                ' so there is no discount from the final price!')
        });

        it('Passing car euro 4', function() {
            expect(dealership.euroCategory(4))
                .to.equal('We have added 5% discount' +
                ' to the final price: 14250.')
        })
    });
});
