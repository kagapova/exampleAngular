import SearchResult from "./SearchResult";

export default class CryptoCurrency implements SearchResult {

    catUsd: number;
    chart: Array<CryptoCurrencyChart>;
    data: CryptoCurrencyInfo;

}

export class CryptoCurrencyChart {

    timestamp: number;
    closeValue: number;

}

class CryptoCurrencyInfo {

    name: string;
    coinName: string;
    symbol: string;
    fullName: string;
    totalCoinSupply: number;
    url: string;
    image: string
}
