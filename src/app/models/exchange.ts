import { ExchangeCurrencyRate } from './exchange-currency-rate';

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
