---
id: challenges
title: Challenges & Limitations
---

# Challenges & Limitations

This section outlines the known technical and design challenges faced during development.

---

## ⛔ API Limitations

- CoinGecko and other public APIs have rate limits.
- Some token data might be delayed or temporarily unavailable.
- TradingView’s free widget offers limited customization.

---

## ⚙️ Performance Bottlenecks

- On slow networks, API responses delay chart rendering.
- Larger token lists can slow down UI interaction.
- Repeated refetching of the same data adds load.

---

## 🧪 Testing Constraints

- Difficult to simulate real-time price fluctuations.
- Limited testing on mobile responsiveness and cross-browser compatibility.

---

## 🔐 Security Concerns

- No authentication added (only public data shown).
- No validation for injected scripts (e.g., TradingView) — risk if extended.

---

## 📈 Scalability

- UI designed for ~10-20 tokens; beyond that needs pagination or infinite scroll.
- Real-time price updates currently polled; could be improved via WebSocket.

---

> These challenges can be tackled in future updates with more robust architecture and API upgrades.
