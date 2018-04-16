export class CalcResult {
    constructor(public readonly from: string,
                public readonly to: string,
                public readonly amount: number,
                public readonly rate: number) {
    }
}
