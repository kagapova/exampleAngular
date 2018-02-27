import {Blockchain} from './blockchains';

export class ExchangeRate {
    constructor(public readonly blockchain: Blockchain,
                public readonly value: number) {
    }
}
