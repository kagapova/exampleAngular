import {AddressResult} from './search-address-result';
import {WebResult} from './search-web-result';
import {CurrencyResult} from './search-currency-result';

export type SearchResult = (
    WebResult |
    CurrencyResult |
    AddressResult);
