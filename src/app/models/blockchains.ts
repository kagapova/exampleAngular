export class Blockchain {
    constructor(public readonly name: string,
                public readonly symbol: string) {

    }
}

export const Bitcoin = new Blockchain('Bitcoin', 'BTC');
export const Dash = new Blockchain('Dash', 'DASH');
export const Ethereum = new Blockchain('Ethereum', 'ETH');
export const Litecoin = new Blockchain('Litecoin', 'LTC');

export const Blockchains = {
    "BTC": Bitcoin,
    "DASH": Dash,
    "ETH": Ethereum,
    "LTC": Litecoin,
};
