// PaymentMethod Interface
interface PaymentMethod {
    processPayment(amount: number): void;
}

// Concrete Payment Methods
class CreditCardPayment implements PaymentMethod {
    processPayment(amount: number) {
        console.log(`Processing credit card payment of $${amount}`);
    }
}

class PayPalPayment implements PaymentMethod {
    processPayment(amount: number) {
        console.log(`Processing PayPal payment of $${amount}`);
    }
}

class CryptoPayment implements PaymentMethod {
    processPayment(amount: number) {
        console.log(`Processing cryptocurrency payment of $${amount}`);
    }
}

// PaymentFactory Class
class PaymentFactory {
    static createPaymentMethod(type: string): PaymentMethod {
        if (type === "creditcard") {
            return new CreditCardPayment();
        } else if (type === "paypal") {
            return new PayPalPayment();
        } else if (type === "crypto") {
            return new CryptoPayment();
        } else {
            throw new Error("Invalid payment method type");
        }
    }
}

// Usage Example
const paymentType = "paypal"; // This could be dynamically selected by the user

const paymentMethod = PaymentFactory.createPaymentMethod(paymentType);
paymentMethod.processPayment(100);  // Process payment of $100
