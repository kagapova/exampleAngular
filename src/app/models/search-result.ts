export type SearchResult = (LinkResult | TokenResult | AddressResult);


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

export class AddressResult {
    public static readonly TYPE = 2;

    public readonly type: number = AddressResult.TYPE;

    constructor(public readonly address: string,
                public readonly blockchain: string,
                public readonly blockchainCode: string,
                public readonly balance: number,
                public readonly countTransactions: number,
                public readonly tokens: AddressTokenResult[]) {
    }
}

export class AddressTokenResult {
    constructor(public readonly address: string,
                public readonly name: string,
                public readonly symbol: string,
                public readonly logo: string,
                public readonly price: number,
                public readonly balance: number) {
    }
}
