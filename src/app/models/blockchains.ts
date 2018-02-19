export class Blockchain {
    constructor(public readonly name: string,
                public readonly symbol: string) {

    }
}

export const Ethereum = new Blockchain('Ethereum', 'ETH');
export const Bitcoin = new Blockchain('Bitcoin', 'BTC');
export const Litecoin = new Blockchain('Litecoin', 'LTC');
