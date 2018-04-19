import {Address} from './address';
import {WebResult} from './web-result';
import {Company} from './company';
import {Currency} from './currency';
import {Transaction} from './transaction';
import {Event} from './event';
import {Wallet} from './wallet';
import {News} from './news';
import {CalcResult} from './calc-result';

export type SearchResult = (
    Address |
    Company |
    Currency |
    Event |
    Transaction |
    Wallet |
    WebResult |
    News |
    CalcResult);


export type SearchResults = {
    type: string;
    data: {
        address: Address;
        company: Company;
        currency: Currency;
        txn: Transaction;
        web: WebResult[];
        events: Event[];
        wallets: Wallet[];
        wallet: Wallet;
        news: News[];
        calc: CalcResult;
    };
}
