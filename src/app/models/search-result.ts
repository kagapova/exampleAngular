export type SearchResult = (LinkResult | TokenResult);


export class LinkResult {
    static readonly TYPE = 0;

    public readonly type: number = LinkResult.TYPE;

    constructor(public readonly title: string,
                public readonly description: string,
                public readonly imageURL: string,
                public readonly tokens: string,
                public readonly url: string) {
    }
}

export class TokenResult {
    public static readonly TYPE = 1;

    public readonly type: number = TokenResult.TYPE;

    constructor(public readonly name: string,
                public readonly fullName: string,
                public readonly coinName: string,
                public readonly symbol: string,
                public readonly imageURL: string,
                public readonly url: string,
                public readonly totalCoinSupply: number,
                public readonly usdValue: number,
                public readonly chartValues: ChartValue[]) {

    }
}

export class ChartValue {
    constructor(public readonly x: number,
                public readonly y: number) {

    }
}
