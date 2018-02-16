import {Ethereum, Bitcoin} from './blockchains';
import {Token} from './token';


export type Transaction = (
    EthTransaction |
    BtcTransaction);


export class EthTransaction {
    public readonly type = 'transaction';
    public readonly blockchain = Ethereum;

    constructor(public readonly hash: string,
                public readonly blockNumber: number,
                public readonly confirmations: number,
                public readonly isSuccess: boolean,
                public readonly isPending: boolean,
                public readonly isError: boolean,
                public readonly from: string,
                public readonly fromToken: Token,
                public readonly to: string,
                public readonly toToken: Token,
                public readonly value: number,
                public readonly transfer: EthTransactionTransfer,
                public readonly input: string,
                public readonly gasLimit: number,
                public readonly gasUsed: number,
                public readonly createdAt: Date) {
    }
}


export class EthTransactionTransfer {
    constructor(public readonly token: Token,
                public readonly value: number,
                public readonly from: string,
                public readonly to: string) {
    }
}


export class BtcTransaction {
    public readonly type = 'transaction';
    public readonly blockchain = Bitcoin;

    constructor(public readonly hash: string,
                public readonly blockHeight: number,
                public readonly size: number,
                public readonly inputs: BtcTransactionInput[],
                public readonly outputs: BtcTransactionOutput[]) {
    }
}

export class BtcTransactionInput {
    constructor(public readonly address: string,
                public readonly value: number) {
    }
}


export class BtcTransactionOutput {
    constructor(public readonly address: string,
                public readonly value: number) {
    }
}
