export class Wallet {
    constructor(public readonly name: string,
                public readonly logoUrl: string,
                public readonly siteUrl: string,
                public readonly coins: string[],
                public readonly anonymity: string,
                public readonly easeOfUse: string,
                public readonly cryptocompareUrl: string,
                public readonly analyticalURL: string) {
    }
}
