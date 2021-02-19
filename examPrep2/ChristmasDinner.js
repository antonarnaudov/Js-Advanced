class ChristmasDinner {
    constructor(budget) {
        if (budget < 0) {
            throw new Error('The budget cannot be a negative number')
        } else {
            this.budget = budget;
            this.dishes = [];
            this.products = [];
            this.guests = {};
        }
    }

    shopping([product, price]) {
        if (price > this.budget) {
            throw new Error('Not enough money to buy this product')
        }
        this.products.push(product)
        this.budget -= price

        return `You have successfully bought ${product}!`
    }

    //{ recipeName: string, productsList: array of strings }
    recipes({recipeName, productsList}) {
        if (this.products >= productsList) {

            this.dishes.push({recipeName, productsList})
            return `${recipeName} has been successfully cooked!`
        }

        throw new Error("We do not have this product")
    }

    inviteGuests(name, dish) {
        if (this.dishes.some(d => d.recipeName === dish) === false) {
            throw new Error("We do not have this dish")
        } else if (this.guests[name]) {
            throw new Error("This guest has already been invited")
        }

        this.guests[name] = dish
        return `You have successfully invited ${name}!`
    }

    showAttendance() {
        let result = '';
        for (let [name, dish] of Object.entries(this.guests)) {
            console.log(Object.entries(this.guests))
            let ingredient = this.dishes.find(d => d.recipeName === dish).productsList
            result += `${name} will eat ${dish}, which consists of ${ingredient.join(", ").trim()}\n`
        }
        return result.trim()
    }
}


let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());