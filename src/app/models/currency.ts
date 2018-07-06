export class Currency {
    public static readonly TimePeriod1d = '1d';
    public static readonly TimePeriod1w = '1w';
    public static readonly TimePeriod1m = '1m';
    public static readonly TimePeriod3m = '3m';
    public static readonly TimePeriod1y = '1y';
    public static readonly TimePeriod5y = '5y';

    public readonly type: string = 'currency';

    constructor(public readonly name: string,
                public readonly symbol: string,
                public readonly imageUrl: string,
                public readonly urls: {
                    coinmarketcup: string
                    cryptocompare: string
                },
                public readonly totalCoinSupply: number,
                public readonly price: number,
                public readonly cmcSlug: string,
                public readonly charts: Map<string, ChartValue[]>,
                public readonly company: Company,
                public readonly ico: ICO,
                public readonly capitalization: CurrencyCapitalization,
                public readonly bookmarkId?: number) {
    }
}


export class ChartValue {
    constructor(public readonly x: number,
                public readonly y: number) {
    }
}


export class Company {
    constructor(public readonly name: string,
                public readonly description: string,
                public readonly features: string,
                public readonly proofType: string,
                public readonly technology: string) {
    }
}


export class ICO {
    constructor(public readonly status: string,
                public readonly fundingTarget: string,
                public readonly fundingCap: string,
                public readonly tokenType: string) {
    }
}


export class CurrencyCapitalization {
    constructor(public readonly marketCap: number,
                public readonly volume24hUsd: number,
                public readonly volume24h: number,
                public readonly circulatingSupply: number,
                public readonly maxSupply: number) {
    }
}
