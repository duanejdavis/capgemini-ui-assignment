# Customer Rewards Program

A React application that calculates and displays customer reward points based on purchase transactions.

## Rewards Calculation Rules

- **2 points** for every dollar spent over $100
- **1 point** for every dollar spent between $50-$100
- **0 points** for amounts under $50

Example: A $120 purchase = 90 points (2×$20 + 1×$50)

## Features

- Simulated async API calls to fetch transaction data
- Custom hooks for data fetching and points calculation
- Responsive table displaying customer rewards and transaction history
- 6 customers with transaction data spanning 3 months (Nov 2024 - Jan 2025)

## Tech Stack

- React 19
- Vite 7
- JavaScript (ES6+)
- ESLint for code quality

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd capgemini-ui-assignment
```

2. Install dependencies
```bash
npm install
```

### Running the Application

Development mode:
```bash
npm run dev
```

The application will open at `http://localhost:5173`

Lint code:
```bash
npm run lint
```

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## Project Structure
```
src/
├── assets/           # Project assets (ie images)
├── components/        # React components (RewardsTable, LoadingSpinner)
├── hooks/            # Custom hooks (useFetch, useCalculatePoints)
├── services/         # API service (mock async calls)
├── utils/            # Utility functions (calculatePoints)
├── data/             # Mock transaction data
└── App.jsx           # Main application component
```

## Assignment Requirements

✅ React JS (no TypeScript)  
✅ Simulated asynchronous API call  
✅ No Redux  
✅ Mock dataset with 3 months of transaction data  
✅ Calculates reward points per customer per month and total  

## Author

Duane Davis

## License

MIT