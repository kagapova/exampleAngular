export type SearchResult = (LinkResult | TokenResult);


export class LinkResult {
    static readonly TYPE = 0;

    constructor(public readonly title: string,
                public readonly description: string,
                public readonly imageURL: string,
                public readonly tokens: string,
                public readonly url: string) {
    }
}

export class TokenResult {
    static readonly TYPE = 1;

    constructor(public readonly name: string,
                public readonly fullName: string,
                public readonly coinName: string,
                public readonly symbol: string,
                public readonly imageURL: string,
                public readonly url: string,
                public readonly totalCoinSupply: number,
                public readonly usdValue: number) {

    }
}
