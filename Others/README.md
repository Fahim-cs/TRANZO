# TRANZO – Smart Mobile Financial Transaction System

**TRANZO** is a web-based mobile financial transaction and personal expense management system designed to make everyday financial activities simple, organized, and easy to manage.

The system provides common financial transaction features such as adding money, sending money, cashing out, money transfer, bill payment, mobile recharge, transaction history, and expense management through a simple and user-friendly interface.

## Project Links

* **GitHub Repository:** https://github.com/Fahim-cs/TRANZO
* **Live Website:** https://fahim-cs.github.io/TRANZO/

---

# Project Overview

Managing financial transactions and personal expenses can become difficult when different activities are handled separately.

TRANZO brings common financial transaction activities and personal expense management into one platform. The system provides a simple dashboard where users can access financial services, monitor their available balance, record expenses, and view transaction activities.

The project focuses on:

* Simple and user-friendly navigation
* Responsive web interface
* Basic transaction validation
* Balance management
* Expense tracking
* Transaction history
* Secure access to protected pages

---

# Main Features

## User Features

* User Registration
* User Login
* Login Validation
* Login Protection
* Dashboard
* Available Balance
* Add Money
* Send Money
* Cash Out
* Money Transfer
* Pay Bill
* Mobile Recharge
* Transaction History
* Expense Management
* Profile and Settings
* Logout

## Transaction Features

TRANZO supports the following transaction activities:

* Add Money
* Send Money
* Cash Out
* Money Transfer
* Pay Bill
* Mobile Recharge

Transaction records contain information such as:

* Transaction ID
* Transaction Type
* Receiver/Destination
* Amount
* Status
* Date
* Time

## Expense Management

The Expense Management section allows users to record and monitor personal expenses.

Users can:

* Add an expense
* Enter expense amount
* Select expense category
* Select expense date
* Add an optional note
* View total expenses
* View monthly expenses
* View today's expenses
* View saved expense records

## Analytics

The Analytics section is currently under development.

At the current stage, users can access the Analytics section, but advanced financial analytics and visual reports have not yet been implemented.

---

# Technologies Used

## Frontend

* HTML5
* Tailwind CSS
* JavaScript (ES6+)
* DaisyUI
* **Javascript.**
* **typescript**
* **next.js**
* **MongoDB**
* **Resend API**

## Development Tools

* Visual Studio Code
* Git
* GitHub
* Live Server

## External Resources

* Google Fonts
* Font Awesome
* Tailwind CSS CDN
* DaisyUI CDN

---

# System Requirements

TRANZO is a web-based application and can be accessed directly through the live website.

### Recommended Browsers

The application is designed to work with modern web browsers, including:

* Google Chrome
* Microsoft Edge
* Mozilla Firefox

For the best experience, use an up-to-date version of a modern browser.

### For Local Development

If you want to run the project locally, you will need:

* Visual Studio Code
* Live Server extension
* A modern web browser
* Internet connection for CDN-based resources

No additional database server or package installation is required for the current frontend prototype.

---

# How to Access the Live Website

The easiest way to use TRANZO is through the live website:

**https://fahim-cs.github.io/TRANZO/**

### Steps

1. Open a modern web browser.
2. Visit the TRANZO live website.
3. Open the home page.
4. Use the Login or Registration option.
5. Explore the dashboard and available features.

---

# Installation and Local Setup

Although TRANZO is available as a live website, the project can also be run locally.

## Step 1 – Clone the Repository

Open a terminal or command prompt and run:

```bash
git clone https://github.com/Fahim-cs/TRANZO.git
```

Then move into the project directory:

```bash
cd TRANZO
```

---

## Step 2 – Open the Project in Visual Studio Code

Open the project folder in Visual Studio Code.

The project contains HTML pages, JavaScript files, and assets required to run the application.

---

## Step 3 – Install Live Server

If Live Server is not already installed:

1. Open Visual Studio Code.
2. Go to the **Extensions** section.
3. Search for **Live Server**.
4. Install the Live Server extension.

---

## Step 4 – Run the Project

1. Open the TRANZO project in Visual Studio Code.
2. Open `index.html`.
3. Right-click on the file.
4. Select **Open with Live Server**.
5. The application will open in your default browser.

The local address may look similar to:

```text
http://127.0.0.1:5500/
```

The exact port may vary depending on the Live Server configuration.

---

# User Manual

This section provides step-by-step instructions for using the main features of TRANZO.

---

## 1. Home Page

When the application is opened, users are presented with the TRANZO landing page.

From the home page, users can access:

* User Login
* Account Registration

The home page provides the main entry point to the application.

---

## 2. User Registration

To create a new account:

1. Open the TRANZO website.
2. Click **Create Account** or the Registration option.
3. Enter your name.
4. Enter your email address.
5. Enter your mobile number.
6. Enter a password.
7. Submit the registration form.
8. After successful registration, use the registered mobile number and password to log in.

---

## 3. User Login

To log in:

1. Open the Login page.
2. Enter the registered mobile number.
3. Enter the password.
4. Click **Login**.
5. If the credentials are valid, the user will be redirected to the Dashboard.

If incorrect credentials are entered, the system displays an error message.

The application also checks whether the user account is active.

---

## 4. Dashboard

After successful login, the user is redirected to the Dashboard.

The Dashboard provides access to major features such as:

* Available Balance
* Add Money
* Send Money
* Cash Out
* Money Transfer
* Pay Bill
* Mobile Recharge
* Expense Management
* Recent Transactions
* Settings

The Dashboard also displays the user's current available balance and recent activity.

---

# 5. Add Money

The Add Money feature allows users to increase their available balance.

### Steps

1. Open **Add Money**.
2. Enter the amount.
3. Select a payment method.
4. Confirm the transaction.
5. The available balance will increase.
6. The transaction will be recorded.

### Validation

The system does not accept:

* Empty amount
* Zero amount
* Negative amount
* Invalid payment method

---

# 6. Send Money

The Send Money feature allows users to send money to another mobile number.

### Steps

1. Open **Send Money**.
2. Enter the recipient's mobile number.
3. Enter the amount.
4. Confirm the transaction.
5. The system checks the available balance.
6. If sufficient balance is available, the transaction is completed.
7. The available balance is reduced.
8. The transaction is added to the transaction history.

### Insufficient Balance

If the requested amount is greater than the available balance, the system displays:

```text
You don't have enough balance.
```

The transaction is not completed.

---

# 7. Cash Out

The Cash Out feature allows users to withdraw money through an agent.

### Steps

1. Open **Cash Out**.
2. Enter the cash-out amount.
3. Select an agent.
4. Enter the agent number.
5. Confirm the transaction.
6. The system checks the available balance.
7. If sufficient balance is available, the balance is reduced.
8. The transaction is recorded.

If the requested amount exceeds the available balance, the transaction is rejected.

---

# 8. Money Transfer

The Money Transfer feature allows users to record a transfer to a destination.

### Steps

1. Open **Money Transfer**.
2. Enter the required destination information.
3. Enter the transfer amount.
4. Confirm the transaction.
5. The transaction is recorded in the transaction records.

---

# 9. Pay Bill

The Pay Bill feature allows users to perform bill payment transactions.

### Steps

1. Open **Pay Bill**.
2. Enter or select the required bill information.
3. Enter the payment amount.
4. Confirm the transaction.
5. The transaction information is recorded.

---

# 10. Mobile Recharge

The Mobile Recharge feature allows users to recharge a mobile number.

### Steps

1. Open **Mobile Recharge**.
2. Enter the mobile number.
3. Select the mobile operator.
4. Select the recharge type.
5. Enter the recharge amount.
6. Confirm the recharge.

### Recharge Limit

The current prototype allows a maximum recharge amount of **৳500**.

If the user enters an amount greater than ৳500, the system displays:

```text
Your recharge range is 500tk
```

If the available balance is insufficient, the recharge will not be completed.

---

# 11. Expense Management

The Expense Management section allows users to record their personal expenses.

### Add an Expense

1. Open **Expense Management**.
2. Enter the expense amount.
3. Select an expense category.
4. Select the expense date.
5. Add a note if required.
6. Submit the expense.

After adding an expense, the system updates the expense information.

### Expense Summary

The Expense Management page provides information such as:

* Total Expense
* Monthly Expense
* Today's Expense
* Expense Records

---

# 12. Transaction History

Transaction History allows users to view their recorded financial activities.

Each transaction may contain:

* Transaction ID
* Transaction Type
* Receiver or Destination
* Amount
* Status
* Date
* Time

New transactions are displayed at the top of the transaction list.

---

# 13. Analytics

The Analytics section is currently under development.

When users open the Analytics section, they are informed that the feature is currently being worked on.

Advanced analytics such as:

* Expense charts
* Spending trends
* Category-based analysis
* Financial insights

are planned for future development.

---

# 14. Settings

The Settings section provides access to general account-related options.

Available options include:

* Help Center
* About TRANZO
* Logout

---

# 15. Logout

To logout from the application:

1. Open **Settings**.
2. Select **Logout**.
3. The current login session is removed.
4. The user is redirected to the Login page.

After logout, protected pages cannot be accessed without logging in again.

---

# Security and Validation

The current version of TRANZO includes basic frontend security and validation mechanisms.

Implemented mechanisms include:

* Login credential validation
* Protected dashboard access
* Active account checking
* Empty input validation
* Amount validation
* Available balance validation
* Recharge amount validation
* Transaction validation

For example, users cannot complete a Send Money or Cash Out transaction when the requested amount is greater than their available balance.

### Important Note

The current project is an academic frontend prototype.

Production-level security features such as:

* Password hashing
* Server-side authentication
* Secure sessions
* Role-based authorization
* OTP/email verification
* Server-side validation
* Secure database access

would require backend implementation.

---

# Data Storage

The current frontend prototype uses the browser's **LocalStorage** for demonstration purposes.

LocalStorage is used to maintain information such as:

* User information
* Login session
* Available balance
* Transaction records
* Expense records

This allows the frontend prototype to demonstrate transaction and expense functionality without requiring a production database.

---

# Current Limitations

The current version of TRANZO has some limitations because it is a frontend-focused academic prototype.

* Data is stored using browser LocalStorage.
* Production database integration is not included in the current frontend prototype.
* Advanced financial analytics are not implemented yet.
* Production-level authentication requires backend integration.
* Advanced role-based authorization requires backend implementation.
* Automated testing is not included.
* Production-level security requires server-side implementation.

---

# Future Improvements

Future versions of TRANZO can include:

* Backend API integration
* Database integration
* Secure authentication
* Password hashing
* OTP/email verification
* Role-based authorization
* Advanced expense analytics
* Expense visualization and charts
* Budget management
* Income tracking
* Automated testing
* Improved security
* Mobile application version
* Cloud-based data storage

---

# Team Members

| Name                       | Role               |
| -------------------------- | ------------------ |
| **Tabassum Islam**         | UI/UX Designer     |
| **Mahadi Hasan Fahim**     | Frontend Developer |
| **Khandokar Mosleh Uddin** | Backend Developer  |
| **Md. Shakil Hossain**     | Database Engineer  |

---

# Project Structure

A simplified structure of the project is shown below:

```text
TRANZO/
│
├── index.html
├── login.html
├── dashboard.html
├── expense.html
├── analytics.html
│
├── js/
│   └── transaction.js
│
├── assets/
│   ├── logo.png
│   └── other project assets
│
└── README.md
```

The exact project structure may contain additional HTML, JavaScript, image, and asset files.

---

# Links

### GitHub Repository

https://github.com/Fahim-cs/TRANZO

### Live Website

https://fahim-cs.github.io/TRANZO/

---

# Project Status

**Current Status:** Academic Project / Frontend Prototype

The live version demonstrates the implemented frontend features and user interactions.

The project can be further expanded with backend APIs, database integration, advanced analytics, and production-level security.

---

# Documentation

This README contains:

* Project overview
* Main features
* System requirements
* Installation instructions
* Local setup instructions
* User manual
* Feature usage instructions
* Security and validation information
* Current limitations
* Future improvements
* Team information
* GitHub repository link
* Live website link

Users can refer to this README as the primary documentation and user guide for the TRANZO project.

---

# Academic Project

TRANZO was developed as an academic team project to demonstrate the design and development of a web-based mobile financial transaction and expense management system.

**TRANZO – Smart Mobile Financial Transaction System**
