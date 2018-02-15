export class CurrencyResult {
    public readonly type: string = 'currency';

    constructor(public readonly name: string,
                public readonly fullName: string,
                public readonly coinName: string,
                public readonly symbol: string,
                public readonly imageURL: string,
                public readonly url: string,
                public readonly totalCoinSupply: number,
                public readonly price: number,
                public readonly chartValues: ChartValue[]) {
    }
}

export class ChartValue {
    constructor(public readonly x: number,
                public readonly y: number) {

    }
}
