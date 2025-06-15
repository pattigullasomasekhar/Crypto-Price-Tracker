---
id: state
title: State Management Rationale
---

# State Management Rationale

We use **React Query** for managing API data and caching:

## 🔄 Why React Query?

- Handles fetching, caching, updating, and syncing server state automatically.
- Eliminates manual loading and error states.
- Built-in support for background refetching and retrying.

## 🧠 Global UI State

For managing UI-level state like search input, theme, and refresh toggles, we use **Zustand** (or React Context API):

- Lightweight and simple.
- Easy to scale and test.
- Works well alongside React Query.

## 💡 Example Integration

```tsx
import { useQuery } from '@tanstack/react-query';

const { data, isLoading, error } = useQuery(['solanaPrices'], fetchSolanaPrices);
```

## 🛠 State Handling Benefits

- Cleaner code structure.
- Better separation of concerns (UI vs Data).
- Automatic updates without manual prop drilling or lifting state up.
