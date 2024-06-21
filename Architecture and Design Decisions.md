Objective:
The Confetti Calculator project aims to replicate the macOS Scientific Calculator using React, including basic and advanced arithmetic operations and a special confetti feature triggered by specific calculations.

Architecture Overview
Frontend:

React: The core framework for building the user interface, chosen for its component-based architecture and state management capabilities.
State Management: Utilizing React's Context API and hooks (e.g., useState) to manage the state of the calculator, including current input, operations, and results.
UI Components: Breaking down the calculator interface into reusable components (e.g., Button, Display, Calculator).
Styling:

CSS Modules: For encapsulated and modular styling, ensuring that styles do not leak into other components.
Responsive Design: Using CSS Flexbox and Grid to ensure the calculator works well on various screen sizes.
Roboto Font: Imported to match the macOS Calculator aesthetic.
Libraries:

react-confetti-explosion: Integrated to handle the confetti explosion effect when specific conditions are met (i.e., calculations involving the numbers 5 and 6).
Design Decisions
Component-Based Design:

Button Component: Handles individual buttons for digits, operations, and special functions. Each button has its specific onClick event to update the calculator state.
Display Component: Shows the current input and results, updated dynamically based on user interactions.
Calculator Component: Main container managing the layout and interaction logic and Display components.
State Management:


Math.js Library: Used for handling complex mathematical operations like trigonometry, logarithms, and factorials, ensuring accuracy and reliability.
Custom Logic: Implemented for specific features like chaining calculations and handling parentheses to maintain the correct order of operations.
Confetti Feature:

Condition Handling: Specific logic added to detect operations involving 5 and 6, triggering the confetti effect using the react-confetti-explosion library.
Error Handling:

Edge Cases: Managed edge cases like division by zero, ensuring the application does not crash and provides meaningful feedback to the user.