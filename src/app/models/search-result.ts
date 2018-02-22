import {Address} from './address';
import {WebResult} from './web-result';
import {Currency} from './currency';
import {Transaction} from './transaction';

export type SearchResult = (
    Address |
    Currency |
    Transaction |
    WebResult);
