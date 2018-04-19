export class Wallet {
    constructor(public readonly name: string,
                public readonly logoUrl: string,
                public readonly siteUrl: string,
                public readonly coins: string[],
                public readonly anonymity: string,
                public readonly easeOfUse: string,
                public readonly hasTradingFacilities: boolean,
                public readonly hasVouchersAndOffers: boolean,
                public readonly platforms: string[],
                public readonly sourceCodeUrl: string,
                public readonly validationType: string,
                public readonly walletFeatures: string[],
                public readonly cryptocompareUrl: string,
                public readonly analyticalURL: string) {
    }
}
