# Design Patterns & Real-time Chat Application

This repository contains implementations of several software design patterns and a real-time chat application built using React and Node.js. Each section includes multiple use cases and is organized for easy execution via a terminal-based interface.

## Table of Contents
1. [Design Patterns Overview](#design-patterns-overview)
    1. [Behavioral Patterns](#behavioral-patterns)
        - Observer Pattern
        - Command Pattern
    2. [Creational Patterns](#creational-patterns)
        - Singleton Pattern
        - Factory Method Pattern
    3. [Structural Patterns](#structural-patterns)
        - Adapter Pattern
        - Decorator Pattern
2. [Real-Time Chat Application](#real-time-chat-application)
3. [How to Run](#how-to-run)
    1. [Running Design Patterns](#running-design-patterns)
    2. [Running Real-Time Chat Application](#running-real-time-chat-application)

---
  
Here’s an overview of the design patterns that you selected and implemented, including a brief description and use cases for each:

---

## Design Patterns Overview

This project demonstrates the implementation of key software design patterns, classified into **Behavioral**, **Creational**, and **Structural** categories. Each pattern is accompanied by two practical use cases to showcase how these patterns are applied in real-world scenarios.

### 1. Behavioral Patterns

Behavioral patterns are concerned with communication between objects. They define how objects interact with each other and the roles they play in the overall application.

#### **Observer Pattern**
- **Scenario**: A real-time notification system for a weather station that updates multiple display devices whenever there’s a change in weather conditions.
- **Approach**: 
  - The `Observer` interface is implemented by display devices (like phones, desktops, or tablets).
  - The `Subject` (in this case, a `WeatherStation`) maintains a list of observers and notifies them whenever the weather updates.

#### **Command Pattern**
- **Scenario**: A smart home automation system where users can control various devices (like lights, ACs, or TVs) using voice commands or buttons.
- **Approach**:
  - The `Command` interface is implemented to encapsulate requests as objects (e.g., `TurnOnLightCommand` or `TurnOffACCommand`).
  - The system supports an `Undo` feature, allowing the user to reverse the last command issued to the system.

---

### 2. Creational Patterns

Creational patterns focus on object creation, aiming to make the system more flexible and reusable by controlling the instantiation process.

#### **Singleton Pattern**
- **Scenario**: A logging system that ensures only one instance of a logger is used throughout the application.
- **Approach**:
  - The `Logger` class ensures that only one instance is created, using a private constructor and providing a static method (`getInstance`) to access the instance.
  - This approach prevents multiple loggers from being created, ensuring consistent logging across the application.

#### **Factory Method Pattern**
- **Scenario**: An online payment system where users can choose different payment methods (like credit card, PayPal, or cryptocurrency) during checkout.
- **Approach**:
  - An abstract `PaymentMethod` class is defined, and a `PaymentFactory` class dynamically creates the appropriate payment type based on user selection.
  - This allows for flexibility in adding new payment methods in the future without modifying existing code.

---

### 3. Structural Patterns

Structural patterns deal with object composition and typically define relationships between different objects to ensure that parts of the system work together smoothly.

#### **Adapter Pattern**
- **Scenario**: A media player that only supports MP3 format but needs to play various other formats (like MP4, AVI, etc.).
- **Approach**:
  - The `Adapter` class is introduced to convert different media formats into MP3 so that the existing media player can continue functioning without being modified.
  - This pattern promotes compatibility between the player and previously unsupported media formats.

#### **Decorator Pattern**
- **Scenario**: A coffee shop ordering system where customers can customize their coffee by adding ingredients like milk, sugar, or flavor shots.
- **Approach**:
  - The base `Coffee` interface is implemented, and decorators like `MilkDecorator`, `SugarDecorator`, and `FlavorDecorator` are applied dynamically to add additional functionality (ingredients) to the base coffee object.
  - This approach allows for dynamic and flexible customization of coffee orders.

---

### Summary

These design patterns improve code readability, scalability, and maintainability by solving recurring design problems in object-oriented software development. Each pattern is applied to practical use cases, giving you a better understanding of where and how to use these patterns effectively.

---

Let me know if you'd like to expand on any of the patterns or use cases!
---

## Real-Time Chat Application

The real-time chat application showcases the use of design patterns (Observer, Singleton, and Adapter) along with real-time data updates using websockets. It is built with a **React frontend** and a **Node.js backend**.

- **Backend**: Node.js, Express.js
- **Frontend**: React.js, TypeScript
- **WebSocket**: For real-time chat updates
- **UI**: Dynamic chat UI rendering

---

## How to Run

### Prerequisites

- **Node.js** (v16+ recommended)
- **npm** (comes with Node.js)
- **TypeScript** and **ts-node** installed globally:
  ```bash
  npm install -g typescript ts-node
  ```

### 1. Running Design Patterns

The terminal-based interface allows users to choose a pattern and its specific use case to run.

#### Steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-repo/design-patterns.git
   cd design-patterns
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the terminal application**:
   ```bash
   ts-node index.ts
   ```

4. **Follow the prompts** to select the exercise, pattern, and use case you'd like to run. The interface will guide you through:
   - **Exercise - 1**: Design Patterns
     - **Behavioral Pattern**
       - Observer Pattern
       - Command Pattern
     - **Creational Pattern**
       - Singleton Pattern
       - Factory Method Pattern
     - **Structural Pattern**
       - Adapter Pattern
       - Decorator Pattern
   - **Exercise - 2**: Real-Time Chat Application (Runs both backend and frontend automatically)

### 2. Running Real-Time Chat Application

The real-time chat app runs on both **frontend** and **backend** as separate processes. It will automatically install dependencies and launch both servers.

#### Steps:

1. **Navigate to the root directory**:
   ```bash
   cd Exercise - 2/[frontend/backend]
   ```

2. **Run the chat application**:
   ```bash
  npm start # for both frontend and backend 
   ```

3. The script will:
   - **Install frontend and backend dependencies**.
   - **Start the backend server** on `http://localhost:5000`.
   - **Start the frontend server** on `http://localhost:3000`.

4. Once everything is set up, open `http://localhost:3000` in your browser to access the chat application.

---

## Project Structure

```bash
.
├── Exercise - 1
│   ├── Behavioral Pattern
│   │   ├── observer.ts             # Observer pattern use case
│   │   └── command.ts              # Command pattern use case
│   ├── Creational Pattern
│   │   ├── singleton.ts            # Singleton pattern use case
│   │   └── factoryMethod.ts        # Factory method pattern use case
│   └── Structural Pattern
│       ├── adapter.ts              # Adapter pattern use case
│       └── decorator.ts            # Decorator pattern use case
└── Exercise - 2
    ├── frontend                    # React frontend for chat app
    ├── backend                     # Node.js backend for chat app
```

---

## Conclusion

This repository demonstrates a variety of software design patterns and includes a practical real-time chat application. Use the terminal-based interface to explore different design patterns or run the chat application in a few simple steps.

For any questions or contributions, feel free to raise an issue or submit a pull request.
