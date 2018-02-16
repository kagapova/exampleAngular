import {AddressResult} from './address-result';
import {WebResult} from './web-result';
import {CurrencyResult} from './currency-result';
import {Transaction} from './transaction';

export type SearchResult = (
    AddressResult |
    CurrencyResult |
    Transaction |
    WebResult);

