# String Calculator  (TDD Approach)
This repository contains solution for Assessment - String Calculator Kata, implemented in TypeScript using Test-Driven Development (TDD) principles. The goal of this project is to demonstrate a commitment to software craftsmanship by writing readable, testable, and well-structured code.

## Technologies Used

### Backend:
- Node.js
- TypeScript
- Express

### Testing:
- Jest

## Features

- **Handles empty strings:**
  - Input: `""` → Output: `0`
- **Supports single and multiple numbers:**
  - Input: `"1"` → Output: `1`
  - Input: `"1,5"` → Output: `6`
- **Handles new lines as delimiters:**
  - Input: `"1\n2,3"` → Output: `6`
- **Supports custom delimiters:**
  - Input: `"//;\n1;2"` → Output: `3`
- **Throws exceptions for negative numbers:**
  - Input: `"1,-2,3"` → Output: `Error: Negative numbers not allowed: -2`
- **Ignores numbers greater than 1000:**
  - Input: `"2,1001"` → Output: `2`

## Getting Started

### Prerequisites
- Node.js
- npm or yarn

### Installation

#### Clone the repository:
```sh
git clone https://github.com/MilanBagiya/string-calculator.git
cd string-calculator
```

#### Install dependencies and run the backend:
```sh
npm install
npm run start # or npm run test
```

## Conclusion
This project demonstrates a solid understanding of **TDD principles**, **TypeScript**, **Node**, and **Express**.
Feel free to explore and extend the functionality of this **String Calculator**!

---
**Author:** Milan Bagiya
**GitHub:** [https://github.com/MilanBagiya/](https://github.com/MilanBagiya/)

"Below are images showcasing all test case scenarios:"

Test 1: Add failing test for empty string returning 0
![image](https://github.com/user-attachments/assets/54e4cf80-a25f-42a6-8033-7bba2f189c05)

Test 2: Handle empty string to return 0
![image](https://github.com/user-attachments/assets/825c2295-2d11-4221-afc2-b63924d9940f)

Test 3: Add failing test for single number
![image](https://github.com/user-attachments/assets/e3744816-63a3-4761-944e-e850c0ee5bd3)

Test 4: Handle single number support for calculation
![image](https://github.com/user-attachments/assets/e67b2852-ea39-4e34-829c-12a09c7524ea)

Test 5: Add failing test for two comma-separated numbers
![image](https://github.com/user-attachments/assets/3ee14c1d-e618-4cd5-98ac-7d90495624f6)

Test 6: Handle comma-separated numbers sum
![image](https://github.com/user-attachments/assets/63a949a8-10c4-4b9e-8597-817b3ff4cdc2)

Test 7: Handle Multiple numbers sum
![image](https://github.com/user-attachments/assets/99fe9b54-c8c6-44b0-a80c-275162b8ab1f)

Test 8: Add failing test for new line delimiters
![image](https://github.com/user-attachments/assets/d0e46c8a-3155-4d30-a67b-93075e8083f6)

Test 9: Implement new line delimiter support
![image](https://github.com/user-attachments/assets/a4915ef1-c514-4d81-8e9f-fabeb959f8da)

Test 10: Add failing test for custom delimiter
![image](https://github.com/user-attachments/assets/9803ad41-7305-4a5d-8076-8bdcdc872e47)

Test 11: Implement custom delimiter support
![image](https://github.com/user-attachments/assets/d430ffd4-1f5d-489b-8a04-7a7d3316d0eb)

Test 12: Add failing test for negative number
![image](https://github.com/user-attachments/assets/a5c10ac7-00ed-48a7-9946-4818a2a3cd5c)

Test 13: Handle support for nagative number 
![image](https://github.com/user-attachments/assets/a2d21234-73f7-47f8-96ad-3b4fa340c264)

Test 14: Add failing test for multiple nagative number
![image](https://github.com/user-attachments/assets/ecf84062-2383-40f3-a26f-caa29dace715)

Test 15: Handle support for multiple nagative number
![image](https://github.com/user-attachments/assets/60c5a810-b69d-4b25-b5f4-acabbec18c86)

Test 16: Handle failing test for ignore numbers greater than 1000
![image](https://github.com/user-attachments/assets/51870b48-297f-4540-b7bb-e13148c65031)

Test 17: Handle support for ignore numbers greater than 1000
![image](https://github.com/user-attachments/assets/8248ff54-0957-420f-be1e-209856549331)

