import {Blockchain} from './blockchains';

export class ExchangeRate {
    constructor(public readonly blockchain: Blockchain,
                public readonly h24: number,
                public readonly value: number) {
    }
}
