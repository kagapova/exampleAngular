export class Token {
    constructor(public readonly address: string,
                public readonly name: string,
                public readonly symbol: string,
                public readonly logo: string,
                public readonly decimals: number,
                public readonly price: number) {
    }
}
