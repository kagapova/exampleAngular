import {Address} from './address';
import {WebResult} from './web-result';
import {Company} from './company';
import {Currency} from './currency';
import {Transaction} from './transaction';

export type SearchResult = (
    Address |
    Company |
    Currency |
    Transaction |
    WebResult);
