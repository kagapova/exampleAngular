interface WalletServer {
    type: 'wallet';
    source: string;
    data: {
        affiliateURL: string;
        anonymity: string;
        coins: string[];
        cryptoCompareUrl: string;
        easeOfUse: string;
        hasTradingFacilities: boolean;
        hasVouchersAndOffers: boolean;
        logoUrl: string;
        name: string;
        platforms: string[];
        security: string;
        sourceCodeUrl: string;
        validationType: string;
        walletFeatures: string[];
    };
}
