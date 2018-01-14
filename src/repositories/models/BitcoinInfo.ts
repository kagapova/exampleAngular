import SearchResult, {SearchType} from "./SearchResult";

export default class BitcoinInfo implements SearchResult {

    hash160: string;
    address: string;
    countTxs: number;
    countUnredeemed: number;
    totalReceived: string;
    totalSent: string;
    balance: string;
    type = SearchType.BITCOIN_ADDRESS;

}