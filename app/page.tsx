"use client";

import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useState } from "react";

const fetchSolanaTokens = async () => {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=solana-ecosystem&order=market_cap_desc&per_page=10&page=1"
  );
  if (!res.ok) throw new Error("Failed to fetch tokens");
  return res.json();
};

export default function Home() {
  const [search, setSearch] = useState("");
  const [isRefreshing, setIsRefreshing] = useState(false);

  const {
    data: tokens,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["solanaTokens"],
    queryFn: fetchSolanaTokens,
  });

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await refetch();
    setTimeout(() => setIsRefreshing(false), 300); // simulate brief delay
  };

  const filteredTokens = tokens?.filter((token: any) =>
    token.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">🔍 Solana Token Tracker</h1>

      <div className="flex justify-center gap-2 mb-4">
        <input
          type="text"
          placeholder="Search tokens..."
          className="p-2 border rounded w-1/2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={handleRefresh}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          disabled={isRefreshing}
        >
          {isRefreshing ? "Refreshing..." : "Refresh"}
        </button>
      </div>

      {isLoading ? (
        <p className="text-center text-blue-500">Loading tokens...</p>
      ) : isError ? (
        <p className="text-center text-red-500">Error fetching tokens.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTokens?.map((token: any) => (
            <div key={token.id} className="bg-white p-4 shadow rounded">
              <div className="flex items-center gap-4">
                <img src={token.image} alt={token.name} className="w-10 h-10" />
                <div>
                  <h2 className="text-lg font-semibold">{token.name}</h2>
                  <p className="text-gray-600">${token.current_price.toLocaleString()}</p>
                </div>
              </div>
              <Link
                href={`/token?id=${token.symbol.toUpperCase()}`}
                className="inline-block mt-3 text-blue-600 hover:underline"
              >
                View Chart
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
