interface CurrencyServer {
    type: 'currency';
    source: string;
    data: {
        name: string;
        coinName: string;
        symbol: string;
        fullName: string;
        image: string;
        price: number;
        totalCoinSupply: number;
        url: string;
        chart: CurrencyChartServer[];
        detailedInfo: {
            general: {
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
        },
    },
}

interface CurrencyChartServer {
    timestamp: number;
    closeValue: number;
}
