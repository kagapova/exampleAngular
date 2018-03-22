import {Wallet} from '../../../models/wallet';


export function parseWallet(result: WalletServer): Wallet {
    if (result.source !== 'cryptocompare') {
        return null;
    }

    return new Wallet(
        result.data.name,
        result.data.logoUrl,
        result.data.affiliateURL,
        result.data.coins,
        result.data.anonymity,
        result.data.easeOfUse,
        result.data.cryptoCompareUrl
    );
}
