import {Blockchain} from './blockchains';

export class ExchangeRate {
    constructor(public readonly blockchain: Blockchain,
                public readonly price: number,
                public readonly change: number) {
    }
}
