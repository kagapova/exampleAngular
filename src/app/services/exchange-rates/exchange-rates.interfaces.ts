type ExchangeRatesResponse = {
    [s: string]: ExchangeRateResponse[]
}

type ExchangeRateResponse = {
    symbol: string
    price: number
    change: number
}
