export class Exchange {
    constructor(public readonly name: string,
                public readonly description: string,
                public readonly country: string,
                public readonly logoUrl: string,
                public readonly itemType: string,
                public readonly url: string,
                public readonly currencyRates: ExchangeCurrencyRate[],
                public readonly cryptocompareUrl: string,
                public readonly analyticalURL: string) {
    }
}

export class ExchangeCurrencyRate {
    constructor(public readonly fromSymbol: string,
                public readonly toSymbol: string,
                public readonly price: number,
                public readonly open24Hour: number,
                public readonly high24Hour: number,
                public readonly low24Hour: number,
                public readonly volume24Hour: number,
                public readonly volume24HourTo: number) {
    }

    get change24Hour(): number {
        return this.price - this.open24Hour;
    }

    get change24HourPercentage(): number {
        return Math.ceil((this.change24Hour / this.open24Hour) * 10000) / 100;
    }
}
