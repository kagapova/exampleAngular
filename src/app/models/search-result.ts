import {Address} from './address';
import {WebResult} from './web-result';
import {CurrencyResult} from './currency-result';
import {Transaction} from './transaction';

export type SearchResult = (
    Address |
    CurrencyResult |
    Transaction |
    WebResult);
