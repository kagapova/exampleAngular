interface ExchangeServer {
    type: 'exchange';
    source: string;
    click: string;
    data: {
        affiliateUrl: string;
        country: string;
        cryptoCompareUrl: string;
        description: string;
        itemType: string;
        logoUrl: string;
        name: string;
        snapshots: ExchangeSnapshotServer[];
    };
}

interface ExchangeSnapshotServer {
    fromSymbol: string;
    toSymbol: string;
    price: number;
    lastUpdate: string;
    lastVolume: number;
    lastVolumeTo: number;
    volume24Hour: number;
    volume24HourTo: number;
    open24Hour: number;
    high24Hour: number;
    low24Hour: number;
}
