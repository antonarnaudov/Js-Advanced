class Parking {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }

    addCar(carModel, carNumber) {
        if (this.vehicles.length === this.capacity) {
            throw new Error('Not enough parking space.')
        }
        this.vehicles.push({
            carModel,
            carNumber,
            payed: false
        })
        return `The ${carModel}, with a registration number ${carNumber}, parked.`
    }

    removeCar(carNumber) {
        if (!(this.carIsFound(carNumber))) {
            throw new Error("The car, you're looking for, is not found.")
        } else if (this.findCarByCarNumber(carNumber).payed === false) {
            throw new Error(`${carNumber} needs to pay before leaving the parking lot.`)
        }
        this.findCarByCarNumber(carNumber, 'remove')
        return `${carNumber} left the parking lot.`
    }

    pay(carNumber) {
        if (!(this.carIsFound(carNumber))) {
            throw new Error(`${carNumber} is not in the parking lot.`)
        } else if (this.findCarByCarNumber(carNumber).payed === true) {
            throw new Error(`${carNumber}'s driver has already payed his ticket.`)
        }
        this.findCarByCarNumber(carNumber, 'pay')
        return `${carNumber}'s driver successfully payed for his stay.`
    }

    getStatistics(carNumber) {
        if (carNumber) {
            const car = this.findCarByCarNumber(carNumber)
            return `${car.carModel} == ${car.carNumber} - ${car.payed ? 'Has payed' : 'Not payed'}`
        }
        const sorted = this.vehicles.sort((a, b) => a.carModel.localeCompare(b.carModel))

        let result = `The Parking Lot has ${Math.abs(this.vehicles.length - this.capacity)} empty spots left.\n`
        sorted.forEach(car => {
            result += `${car.carModel} == ${car.carNumber} - ${car.payed ? 'Has payed' : 'Not payed'}\n`
        })
        return result.trim()
    }

    findCarByCarNumber(carNumber, command) {
        const car = this.vehicles.find(c => c.carNumber === carNumber);

        if (command === 'remove') {
            this.vehicles.splice(this.vehicles.indexOf(car), 1);
        } else if (command === 'pay') {
            car.payed = true;
        }
        return car;
    }

    carIsFound(carNumber) {
        return this.vehicles.some(car => carNumber === car.carNumber)
    }
}

const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.getStatistics());
console.log(parking.pay("TX3691CA"));
console.log(parking.removeCar("TX3691CA"));
