export class Currency {
    public readonly type: string = 'currency';

    constructor(public readonly name: string,
                public readonly fullName: string,
                public readonly coinName: string,
                public readonly symbol: string,
                public readonly imageURL: string,
                public readonly url: string,
                public readonly totalCoinSupply: number,
                public readonly price: number,
                public readonly chartValues: ChartValue[],
                public readonly delta: CurrencyDelta,
                public readonly company: Company,
                public readonly ico: ICO) {
    }
}

export class CurrencyDelta {
    constructor(public readonly start: {
                    date: Date,
                    value: number,
                },
                public readonly end: {
                    date: Date,
                    value: number,
                },
                public readonly minValue: number,
                public readonly maxValue: number,
                public readonly deltaValue: number,
                public readonly deltaPercent: number) {
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
