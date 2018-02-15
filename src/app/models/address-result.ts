import {Bitcoin, Blockchain, Ethereum} from './blockchains';

export type AddressResult = (
    EthAddressResult |
    BtcAddressResult);

export class EthAddressResult {
    public readonly type: string = 'address';
    public readonly blockchain: Blockchain = Ethereum;

    constructor(public readonly address: string,
                public readonly balance: number,
                public readonly totalReceived: number,
                public readonly totalSent: number,
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

export class BtcAddressResult {
    public readonly type: string = 'address';
    public readonly blockchain: Blockchain = Bitcoin;

    constructor(public readonly address: string,
                public readonly hash160: string,
                public readonly balance: number,
                public readonly totalReceived: number,
                public readonly totalSent: number,
                public readonly countTransactions: number) {
    }
}
