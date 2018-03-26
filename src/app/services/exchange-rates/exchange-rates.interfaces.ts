type ExchangeRatesResponse = {
    rates: ExchangeRateResponse[]
}

type ExchangeRateResponse = {
    symbol: string
    price: number
    change: number
}
