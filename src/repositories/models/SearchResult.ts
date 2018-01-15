export default interface SearchResult {

    type: SearchType;

}

export enum SearchType {

    ADVERT = 0,
    CRYPTO_CURRENCY = 1,
    ETHEREUM_ADDRESS = 2,
    ETHEREUM_TX_ADDRESS = 3,
    BITCOIN_ADDRESS = 4,

}
