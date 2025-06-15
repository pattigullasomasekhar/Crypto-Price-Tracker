---
id: api
title: API Integration Logic
---

# API Integration Logic

This project uses the following APIs:

## 1. CoinGecko / Jup.ag / CoinMarketCap

Used to fetch real-time Solana token prices and metadata.

- Sample endpoint (CoinGecko):

  ```
  https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=solana
  ```

- Data includes:
  - Token Name
  - Symbol
  - Current Price
  - Market Cap
  - 24h Change %

## 2. TradingView

Used to fetch interactive charts and technical indicators.

- Integration via script:

  ```html
  <script src="https://s3.tradingview.com/tv.js"></script>
  ```

- Then render using:

  ```js
  new TradingView.widget({ ... });
  ```

> All API calls are made using Axios and handled with React Query for caching and status updates.
