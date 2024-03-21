import React, { useState, useEffect } from 'react';

const CryptoPrices = () => {
    const [cryptoPrices, setCryptoPrices] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchCryptoPrices = async () => {
            const headers = {
                'X-CoinAPI-Key': '95D5E0CA-2C7D-4CC8-B697-3B466C68E9E8'
            };
            try {
                const response = await fetch('https://rest.coinapi.io/v1/exchangerate', { headers });
                const data = await response.json();
                setCryptoPrices(data);
                setIsLoading(false);
            } catch (error) {
                console.error('Failed to fetch data:', error);
                setIsLoading(false);
            }
        };

        fetchCryptoPrices();

    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Crypto Prices</h1>
            <ul>
                {cryptoPrices.map((crypto) => (
                    <li key={crypto.asset_id}>
                        <h2>{crypto.name} ({crypto.asset_id})</h2>
                        <p>Price USD: ${crypto.price_usd}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CryptoPrices;
