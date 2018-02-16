import {Blockchain} from './blockchains';
import {Token} from './token';

export class Transaction {
    public readonly type: string = 'transaction';

    constructor(public readonly blockchain: Blockchain,
                public readonly hash: string,
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
                public readonly transfer: TransactionTransfer,
                public readonly input: string,
                public readonly gasLimit: number,
                public readonly gasUsed: number,
                public readonly createdAt: Date) {
    }
}


export class TransactionTransfer {
    constructor(public readonly token: Token,
                public readonly value: number,
                public readonly from: string,
                public readonly to: string) {
    }
}
