interface CurrencyResultServer {
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
        chart: CurrencyCharResultServer[];
    },
}

interface CurrencyCharResultServer {
    timestamp: number;
    closeValue: number;
}
