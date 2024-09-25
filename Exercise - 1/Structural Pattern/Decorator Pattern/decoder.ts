// Coffee Interface
interface Coffee {
    cost(): number;
    getDescription(): string;
}

// Basic Coffee Class
class BasicCoffee implements Coffee {
    cost(): number {
        return 5; // Base price
    }

    getDescription(): string {
        return "Basic Coffee";
    }
}

// Decorator Base Class
class CoffeeDecorator implements Coffee {
    protected coffee: Coffee;

    constructor(coffee: Coffee) {
        this.coffee = coffee;
    }

    cost(): number {
        return this.coffee.cost();
    }

    getDescription(): string {
        return this.coffee.getDescription();
    }
}

// Milk Decorator
class MilkDecorator extends CoffeeDecorator {
    cost(): number {
        return this.coffee.cost() + 1; // Adding cost for milk
    }

    getDescription(): string {
        return `${this.coffee.getDescription()}, Milk`;
    }
}

// Sugar Decorator
class SugarDecorator extends CoffeeDecorator {
    cost(): number {
        return this.coffee.cost() + 0.5; // Adding cost for sugar
    }

    getDescription(): string {
        return `${this.coffee.getDescription()}, Sugar`;
    }
}

// Client Code
let myCoffee: Coffee = new BasicCoffee();
console.log(`${myCoffee.getDescription()} costs $${myCoffee.cost()}`);

myCoffee = new MilkDecorator(myCoffee);
console.log(`${myCoffee.getDescription()} costs $${myCoffee.cost()}`);

myCoffee = new SugarDecorator(myCoffee);
console.log(`${myCoffee.getDescription()} costs $${myCoffee.cost()}`);
