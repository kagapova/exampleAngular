import {Address, AddressToken, BtcAddress, EthAddress} from '@app/models/address';
import {Bitcoin, Ethereum} from '@app/models/blockchains';
import {Token} from '@app/models/token';


export function parseAddressResult(result: AddressResultServer): Address {
    switch (result.currency.toUpperCase()) {
        case Ethereum.symbol:
            return parseEthAddressResult(result);

        case Bitcoin.symbol:
            return parseBtcAddressResult(result);

        default:
            return null;
    }
}

function getTokensFromResults(tokens: any): AddressToken[] {
    const addressTokens = tokens.map(token => {
        const balance = token.balance / 10 ** token.token.decimals;
        const instance = new Token(
            token.token.address,
            token.token.name,
            token.token.symbol,
            token.token.image,
            token.token.decimals,
            token.token.price
        );

        return new AddressToken(instance, balance);
    });

    return addressTokens;
}

function getTokenByInfo(info: any): Token {
    return new Token(
        info.address,
        info.name,
        info.symbol,
        info.image,
        info.decimals,
        info.price
    );
}
function parseEthAddressResult(result: EthAddressResultServer): EthAddress {
    const tokenInfo = result.data.tokenInfo;
    const tokensFromResults = result.data.tokens || [];
    const tokens = getTokensFromResults(tokensFromResults);
    const token =  tokenInfo ? getTokenByInfo(tokenInfo) : null;

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

function parseBtcAddressResult(result: BtcAddressResultServer): BtcAddress {
    return new BtcAddress(
        result.data.address,
        result.data.hash160,
        result.data.balance / 10000000,
        result.data.totalReceived / 10000000,
        result.data.totalSent / 10000000,
        result.data.countTxs
    );
}
