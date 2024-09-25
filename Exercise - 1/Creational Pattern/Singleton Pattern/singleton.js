"use strict";
class Logger {
    static instance = null;
    // Private constructor to prevent direct instantiation
    constructor() { }
    // Static method to get the singleton instance
    static getInstance() {
        if (this.instance === null) {
            this.instance = new Logger();
        }
        return this.instance;
    }
    // Log a message
    log(message) {
        console.log(`[LOG]: ${message}`);
    }
}
// Usage Example
const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();
// Both logger1 and logger2 are the same instance
logger1.log("This is the first log.");
logger2.log("This is the second log.");
// Checking if they are the same instance
console.log(logger1 === logger2); // Output: true
