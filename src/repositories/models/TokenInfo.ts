import SearchResult, {SearchType} from "./SearchResult";

export default class EthplorerAddressInfo implements SearchResult {

    address: string;
    eth: EthBalance;
    countTxs: number;
    contractInfo: ContractInfo;
    tokenInfo: TokenInfo;
    tokens: Array<TokenInfoItem>;
    tokenName: string;
    type: SearchType;
}


export class EthBalance {

    balance: number;
    totalIn: number;
    totalOut: number;

}

export class ContractInfo {

    creatorAddress: string;
    transactionHash: string;
    timestamp: number;

}

export class TokenInfo {

    address: String;
    name: string;
    decimals: number;
    symbol: string;
    totalSupply: string;
    owner: string;
    lastUpdated: number;
    issuancesCount: number;
    holdersCount: number;
    price: object;

}

export class TokenInfoItem {

    token: TokenInfo;
    balance: number;
    totalIn: number;
    totalOut: number;

}
