import SearchResult, {SearchType} from "./SearchResult";
import {TokenInfo} from "./TokenInfo";

export default class EthTxInfo implements SearchResult {

    hash: string;
    timestamp: number;
    blockNumber: number;
    confirmations: number;
    success: boolean;
    from: string;
    to: string;
    value: string;
    input: string;
    gasLimit: number;
    gasUsed: string;
    logs: Array<LOG>;
    operations: Array<Operation>;
    type: SearchType = SearchType.ETHEREUM_TX_ADDRESS;
}

export class LOG {

    address: string;
    topics: Array<string>;
    data: string;

}

export class Operation {

    timestamp: number;
    transactionHash: string;
    value: string;
    intValue: string;
    type: string;
    priority: string;
    from: string;
    to: string;
    addresses: string;
    tokenInfo: TokenInfo;
    price: object;

}
