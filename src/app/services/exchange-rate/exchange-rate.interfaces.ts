interface ExchangeRatesResponse {
    rates: ExchangeRateResponse[];
}

interface ExchangeRateResponse {
    symbol: string;
    price: number;
    change: number;
}
