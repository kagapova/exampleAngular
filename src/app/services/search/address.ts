import {Address, AddressToken, BtcAddress, EthAddress} from '../../models/address';
import {Bitcoin, Ethereum} from '../../models/blockchains';
import {Token} from '../../models/token';


export function parseAddressResult(result: AddressResultServer): Address {
    switch (result.currency.toUpperCase()) {
        case Ethereum.symbol:
            return this.parseEthAddressResult(result);

        case Bitcoin.symbol:
            return this.parseBtcAddressResult(result);

        default:
            return null;
    }
}

export function parseEthAddressResult(result: EthAddressResultServer): EthAddress {
    let tokens: AddressToken[] = result.data.tokens.map(v => {
        let token = new Token(
            v.token.address,
            v.token.name,
            v.token.symbol,
            v.token.image,
            v.token.decimals,
            v.token.price
        );

        return new AddressToken(
            token,
            v.balance / 10 ** v.token.decimals
        );
    });

    let token: Token = null;
    if (result.data.tokenInfo) {
        token = new Token(
            result.data.tokenInfo.address,
            result.data.tokenInfo.name,
            result.data.tokenInfo.symbol,
            result.data.tokenInfo.image,
            result.data.tokenInfo.decimals,
            result.data.tokenInfo.price
        );
    }

    return new EthAddress(
        result.data.address,
        result.data.eth.balance,
        result.data.eth.totalIn,
        result.data.eth.totalOut,
        result.data.countTxs,
        token,
        tokens
    );
}

export function parseBtcAddressResult(result: BtcAddressResultServer): BtcAddress {
    return new BtcAddress(
        result.data.address,
        result.data.hash160,
        result.data.balance / 10000000,
        result.data.totalReceived / 10000000,
        result.data.totalSent / 10000000,
        result.data.countTxs
    );
}
