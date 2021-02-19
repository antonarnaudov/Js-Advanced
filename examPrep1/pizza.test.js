const {expect, assert} = require('chai')
const pizzUni = require('./pizza')

describe("pizzUni Tests", function () {

    describe("makeAnOrder Tests", function () {
        it('Passing empty order, raises error', function () {
            const order = {};
            assert.throw(()=>pizzUni.makeAnOrder(order), 'You must order at least 1 Pizza to finish the order.');
        })

        it('Passing only drink, raises error', function () {
            const order = {orderedDrink: 'drink'};
            assert.throw(()=>pizzUni.makeAnOrder(order), 'You must order at least 1 Pizza to finish the order.')
        })

        it('Passing only pizza, returns order', function () {
            const order = {orderedPizza: 'pizza'};
            expect(pizzUni.makeAnOrder(order)).to.equal('You just ordered pizza')
        })

        it('Passing pizza and drink order', function () {
            const order = {orderedPizza: 'pizza', orderedDrink: 'drink'};
            expect(pizzUni.makeAnOrder(order)).to.equal('You just ordered pizza and drink.')
        })
    });

    describe("getRemainingWork Tests", function () {
        it('Pass one ready pizza', function () {
            const order = [{pizzaName: 'pizza', status: 'ready'}]
            expect(pizzUni.getRemainingWork(order)).to.equal('All orders are complete!')
        })

        it('Passing one preparing pizza', function () {
            const order = [{pizzaName: 'pizza', status: 'preparing'}]
            expect(pizzUni.getRemainingWork(order)).to.equal('The following pizzas are still preparing: pizza.')
        })

        it('Passing multiple preparing pizzas', function () {
            const order = [{pizzaName: 'pizza', status: 'preparing'}, {pizzaName: 'pizza2', status: 'preparing'}, {pizzaName: 'pizza3', status: 'preparing'}]
            expect(pizzUni.getRemainingWork(order)).to.equal('The following pizzas are still preparing: pizza, pizza2, pizza3.')
        })
    });

    describe("orderType Tests", function () {
        it('Passing Delivery', function () {
            expect(pizzUni.orderType(2, 'Delivery')).to.equal(2)
        })

        it('Passing Carry Out', function () {
            expect(pizzUni.orderType(2, 'Carry Out')).to.equal(2 - (2 * 0.1))
        })
    })
});

