import React, { useState, useEffect } from "react";

const TopCryptos = () => {
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    const fetchTopCryptos = async () => {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1"
      );
      const data = await response.json();
      setCryptos(data);
      //   console.log(response);
      //   console.log(data);
    };

    fetchTopCryptos();
  }, []);

  return (
    <div>
      <h1>Top 10 Cryptocurrencies</h1>
      <ul>
        {cryptos.map((crypto) => (
          <li key={crypto.id}>
            <h2>
              {crypto.name} ({crypto.symbol.toUpperCase()})
            </h2>
            <p>Market Cap: ${crypto.market_cap.toLocaleString()}</p>
            <p>Current Price: ${crypto.current_price.toLocaleString()}</p>
            <p>24h Change: {crypto.price_change_percentage_24h.toFixed(2)}%</p>
            <img src={crypto.image} alt={crypto.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopCryptos;
