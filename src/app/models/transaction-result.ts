import {Blockchain} from './blockchains';

export class TransactionResult {
    public readonly type: string = 'transaction';

    constructor(public readonly blockchain: Blockchain,
                public readonly hash: string,
                public readonly blockNumber: number,
                public readonly confirmations: number,
                public readonly isSuccess: boolean,
                public readonly from: string,
                public readonly to: string,
                public readonly value: number,
                public readonly input: string,
                public readonly gasLimit: number,
                public readonly gasUsed: number,
                public readonly createdAt: Date) {
    }
}
