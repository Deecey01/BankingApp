---

# BankEase

Welcome to BankEase, a unified multi-banking platform where users can manage multiple bank accounts seamlessly. BankEase offers a comprehensive view of transaction histories, supports secure payment transfers, and categorizes expenses for easy tracking. Website: [https://banking-app-six-tau.vercel.app/](https://banking-app-six-tau.vercel.app/)

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)

## Features

### General
- **Unified Dashboard**: View and manage multiple bank accounts from a single platform.
- **Transaction History**: Access detailed transaction history for each bank account.
- **Expense Categorization**: View expenses categorized by type, such as food/drinks, traveling, etc.

### Payment Transfers
- **Inter-Bank Transfers**: Securely transfer payments between bank accounts using Dwolla.

### Monitoring and Security
- **Error Monitoring**: Sentry integration for monitoring and instantly identifying the cause of any errors.
- **Secure Authentication**: Ultra-secure SSR authentication to ensure data protection.

## Technologies Used
- **Frontend**: Next.js 14
- **Styling**: Tailwind CSS
- **Database**: Appwrite
- **Multi-Account Functionality**: Plaid
- **Payment Transfers**: Dwolla
- **Monitoring**: Sentry

## Installation

1. **Clone the repository**
   ```bash
   https://github.com/Deecey01/BankingApp.git
   cd BankingApp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add your Appwrite, Plaid, Dwolla, and Sentry configurations.

   ```env
   #NEXT
    NEXT_PUBLIC_SITE_URL=
    
    #APPWRITE
    NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
    NEXT_PUBLIC_APPWRITE_PROJECT=
    APPWRITE_DATABASE_ID=
    APPWRITE_USER_COLLECTION_ID=
    APPWRITE_BANK_COLLECTION_ID=
    APPWRITE_TRANSACTION_COLLECTION_ID=
    NEXT_APPWRITE_KEY=
    
    #PLAID
    PLAID_CLIENT_ID=
    PLAID_SECRET=
    PLAID_ENV=
    PLAID_PRODUCTS=
    PLAID_COUNTRY_CODES=
    
    #DWOLLA
    DWOLLA_KEY=
    DWOLLA_SECRET=
    DWOLLA_BASE_URL=https://api-sandbox.dwolla.com
    DWOLLA_ENV=sandbox
   ```

4. **Run the application**
   ```bash
   npm run dev
   ```

## Usage

1. **Register and Login**
   - Create an account using the secure SSR authentication process.
   - Log in to access the unified dashboard.

2. **Manage Bank Accounts**
   - Add multiple bank accounts via Plaid.
   - View transaction histories for each account.

3. **Transfer Payments**
   - Securely transfer payments between your bank accounts using Dwolla.

4. **Monitor Expenses**
   - View categorized expenses on the home page for easy tracking of spending habits.

## Contributing

We welcome contributions to enhance BankEase. To contribute:

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Submit a pull request.

Please ensure your code follows our coding guidelines and includes tests where applicable.

---

Feel free to adjust any part of this README to better fit your project’s specifics or add any additional details you find necessary.
