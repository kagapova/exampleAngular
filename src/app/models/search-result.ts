import {Address} from './address';
import {WebResult} from './web-result';
import {Company} from './company';
import {Currency} from './currency';
import {Transaction} from './transaction';
import {Event} from './event';
import {Wallet} from './wallet';
import {Bancor} from './bancor';
import {Exchange} from './exchange';
import {News} from './news';
import {CalcResult} from './calc-result';

export type SearchResult = (
    Address |
    Bancor |
    CalcResult |
    Company |
    Currency |
    Event |
    Exchange |
    News |
    Transaction |
    Wallet |
    WebResult );


export interface SearchResults {
    type: string;
    data: {
        address: Address;
        bancor: Bancor;
        company: Company;
        calc: CalcResult;
        currency: Currency;
        events: Event[];
        exchange: Exchange;
        news: News[];
        otherExchanges: Exchange[];
        txn: Transaction;
        wallet: Wallet;
        wallets: Wallet[];
        web: WebResult[];
    };
}
