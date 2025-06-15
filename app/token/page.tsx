"use client";

import { useSearchParams } from "next/navigation";

export default function TokenPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  if (!id) {
    return (
      <div className="p-6 text-red-500">
        Invalid Token ID. Please go back and search again.
      </div>
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Token Chart: {id}</h1>
      <div className="h-[500px] border rounded overflow-hidden">
        <iframe
  src={`https://www.tradingview.com/widgetembed/?symbol=${id.toUpperCase()}USD&interval=D&theme=light`}
  width="100%"
  height="100%"
  frameBorder="0"
  allowtransparency="true" // ✅ Fixes the warning!
  scrolling="no"
/>

      </div>
    </div>
  );
}
