interface CurrencyServer {
    type: 'currency';
    source: string;
    bookmarkId: number | null;
    data: {
        name: string;
        symbol: string;
        fullName: string;
        image: string;
        price: number;
        rank: number;
        totalCoinSupply: number;
        usdMarketCap: number;
        usdDailyVolume: number;
        circulatingSupply: number;
        cmcSlug: string;
        maxSupply: number;
        urls: {
            coinmarketcup: string;
            cryptocompare: string;
        };
        charts: {
            '1d': CurrencyChartServer[];
            '1w': CurrencyChartServer[];
            '1m': CurrencyChartServer[];
            '3m': CurrencyChartServer[];
            '1y': CurrencyChartServer[];
            '5y': CurrencyChartServer[];
        };
        company: {
            algorithm: string;
            description: string;
            features: string;
            proofType: string;
            technology: string;
        };
        ico: {
            status: string;
            description: string;
            fundingTarget: string;
            fundingCap: string;
            tokenType: string;
        };
        resources: Map<string, string>;

    };
}

interface CurrencyChartServer {
    timestamp: number;
    closeValue: number;
}
