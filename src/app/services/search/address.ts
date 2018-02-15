import {AddressResult, AddressTokenResult, BtcAddressResult, EthAddressResult} from '../../models/search-address-result';
import {Bitcoin, Ethereum} from '../../models/blockchains';


export function parseAddressResult(result: ServerAddressResult): AddressResult {
    switch (result.currency.toUpperCase()) {
        case Ethereum.symbol:
            return this.parseEthAddressResult(result);

        case Bitcoin.symbol:
            return this.parseBtcAddressResult(result);

        default:
            return null;
    }
}

export function parseEthAddressResult(result: ServerEthAddressResult): EthAddressResult {
    let tokens: AddressTokenResult[] = result.data.tokens.map(v => {
        v.token.name = v.token.name ? v.token.name : 'Noname';
        v.token.symbol = v.token.symbol ? v.token.symbol : '?';

        return new AddressTokenResult(
            v.token.address,
            v.token.name,
            v.token.symbol,
            v.token.image,
            v.token.price,
            v.balance / 10 ** v.token.decimals,
        );
    });

    return new EthAddressResult(
        result.data.address,
        result.data.eth.balance,
        result.data.eth.totalIn,
        result.data.eth.totalOut,
        result.data.countTxs,
        tokens
    );
}

export function parseBtcAddressResult(result: ServerBtcAddressResult): BtcAddressResult {
    return new BtcAddressResult(
        result.data.address,
        result.data.hash160,
        result.data.balance / 10000000,
        result.data.totalReceived / 10000000,
        result.data.totalSent / 10000000,
        result.data.countTxs
    );
}
