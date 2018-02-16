import {Bitcoin, Blockchain, Ethereum} from './blockchains';
import {Token} from './token';

export type Address = (
    EthAddress |
    BtcAddress);

export class EthAddress {
    public readonly type: string = 'address';
    public readonly blockchain: Blockchain = Ethereum;

    constructor(public readonly address: string,
                public readonly balance: number,
                public readonly totalReceived: number,
                public readonly totalSent: number,
                public readonly countTransactions: number,
                public readonly token: Token,
                public readonly tokens: AddressToken[]) {
    }
}

export class AddressToken {
    constructor(public readonly token: Token,
                public readonly balance: number) {
    }
}

export class BtcAddress {
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
