import {AddressResult} from './address-result';
import {WebResult} from './web-result';
import {CurrencyResult} from './currency-result';
import {TransactionResult} from './transaction-result';

export type SearchResult = (
    AddressResult |
    CurrencyResult |
    TransactionResult |
    WebResult);

