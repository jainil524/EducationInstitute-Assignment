"use strict";
// Basic Coffee Class
class BasicCoffee {
    cost() {
        return 5; // Base price
    }
    getDescription() {
        return "Basic Coffee";
    }
}
// Decorator Base Class
class CoffeeDecorator {
    coffee;
    constructor(coffee) {
        this.coffee = coffee;
    }
    cost() {
        return this.coffee.cost();
    }
    getDescription() {
        return this.coffee.getDescription();
    }
}
// Milk Decorator
class MilkDecorator extends CoffeeDecorator {
    cost() {
        return this.coffee.cost() + 1; // Adding cost for milk
    }
    getDescription() {
        return `${this.coffee.getDescription()}, Milk`;
    }
}
// Sugar Decorator
class SugarDecorator extends CoffeeDecorator {
    cost() {
        return this.coffee.cost() + 0.5; // Adding cost for sugar
    }
    getDescription() {
        return `${this.coffee.getDescription()}, Sugar`;
    }
}
// Client Code
let myCoffee = new BasicCoffee();
console.log(`${myCoffee.getDescription()} costs $${myCoffee.cost()}`);
myCoffee = new MilkDecorator(myCoffee);
console.log(`${myCoffee.getDescription()} costs $${myCoffee.cost()}`);
myCoffee = new SugarDecorator(myCoffee);
console.log(`${myCoffee.getDescription()} costs $${myCoffee.cost()}`);
