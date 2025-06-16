📊 Crypto Price Tracker
A full-stack web application that displays live prices and charts for Solana tokens, using public crypto APIs and a modern React-based dashboard.

🚀 Tech Stack
Frontend: Next.js (App Router)

State Management: React Query

Documentation: Docusaurus

APIs Used:

CoinGecko

Jup.ag

TradingView Widgets

📁 Project Structure
bash
Copy
Edit
Crypto-Price-Tracker/
├── web-app/       # Next.js project with live price tracker
│   └── app/       # App Router files (layout.tsx, page.tsx, etc.)
├── docs/          # Docusaurus documentation site
├── README.md      # Project Overview
🖥️ Getting Started
1. Run the Next.js App
bash
Copy
Edit
cd web-app
npm install
npm run dev
📍 Open http://localhost:3000 to view the app.

Features:

🔍 Search Solana tokens

🔄 Manual refresh support

📈 Embedded TradingView token chart

💾 API data managed via React Query

2. Run the Docusaurus Docs
bash
Copy
Edit
cd docs
npm install
npm run start
📍 Visit http://localhost:3000 to view docs (runs on same port by default — stop the web-app server if needed).

Documentation includes:

📦 Setup Instructions

⚙️ API Integration Logic

🧠 State Management Approach

🧪 Challenges & Solutions

📱 Responsive Design
Built with mobile-first UI using CSS modules.

Charts and token data scale responsively.

🛠️ Error Handling
Graceful loading states for slow API responses.

Catch blocks for all fetch operations.

Display fallback UIs when token data is unavailable.

🧠 Why React Query?
React Query was chosen for:

Easy caching of token data

Built-in refetching

Simplified error and loading states

Scalable data management

⚙️ Improvements/Future Scope
Add pagination and infinite scrolling

Multi-token comparisons

User authentication for watchlists

Improved error boundary UI

