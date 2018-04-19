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
        result.data.hasTradingFacilities,
        result.data.hasVouchersAndOffers,
        result.data.platforms,
        result.data.sourceCodeUrl,
        result.data.validationType,
        result.data.walletFeatures,
        result.data.cryptoCompareUrl,
        result.click
    );
}
