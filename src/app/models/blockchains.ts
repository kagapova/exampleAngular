export class Blockchain {
    constructor(public readonly name: string,
                public readonly symbol: string) {

    }
}

export const Bitcoin = new Blockchain('Bitcoin', 'BTC');
export const BitcoinCash = new Blockchain('Bitcoin Cash', 'BCH');
export const Cardano = new Blockchain('Cardano', 'ADA');
export const Dash = new Blockchain('Dash', 'DASH');
export const EOS = new Blockchain('EOS', 'EOS');
export const Ethereum = new Blockchain('Ethereum', 'ETH');
export const Litecoin = new Blockchain('Litecoin', 'LTC');
export const Monero = new Blockchain('Monero', 'XMR');
export const NEO = new Blockchain('NEO', 'NEO');
export const Ripple = new Blockchain('Ripple', 'XRP');
export const Stellar = new Blockchain('Stellar', 'XLM');

export const Blockchains = {
    'ADA': Cardano,
    'BCH': BitcoinCash,
    'BTC': Bitcoin,
    'DASH': Dash,
    'EOS': EOS,
    'ETH': Ethereum,
    'LTC': Litecoin,
    'NEO': NEO,
    'XRP': Ripple,
    'XLM': Stellar,
    'XMR': Monero,
};
