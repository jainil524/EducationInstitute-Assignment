"use strict";
// Concrete Payment Methods
class CreditCardPayment {
    processPayment(amount) {
        console.log(`Processing credit card payment of $${amount}`);
    }
}
class PayPalPayment {
    processPayment(amount) {
        console.log(`Processing PayPal payment of $${amount}`);
    }
}
class CryptoPayment {
    processPayment(amount) {
        console.log(`Processing cryptocurrency payment of $${amount}`);
    }
}
// PaymentFactory Class
class PaymentFactory {
    static createPaymentMethod(type) {
        if (type === "creditcard") {
            return new CreditCardPayment();
        }
        else if (type === "paypal") {
            return new PayPalPayment();
        }
        else if (type === "crypto") {
            return new CryptoPayment();
        }
        else {
            throw new Error("Invalid payment method type");
        }
    }
}
// Usage Example
const paymentType = "paypal"; // This could be dynamically selected by the user
const paymentMethod = PaymentFactory.createPaymentMethod(paymentType);
paymentMethod.processPayment(100); // Process payment of $100
