interface ServerAddressResult {
    type: 'address';
    currency: any;
    data: any;
}

interface ServerEthAddressResult {
    type: 'address';
    currency: 'eth';
    data: ServerEthAddressData;
}

interface ServerEthAddressData {
    address: string;
    eth: {
        balance: number;
        totalIn: number;
        totalOut: number;
    };
    countTxs: number;
    contractInfo: any;
    tokenInfo: any;
    tokens: ServerAddressEthToken[];
}

interface ServerAddressEthToken {
    balance: number;
    totalIn: number;
    totalOut: number;
    token: {
        address: string;
        name: string;
        decimals: number;
        symbol: string;
        totalSupply: number;
        owner: string;
        lastUpdated: number;
        issuancesCount: number;
        holdersCount: number;
        price: number;
        image: string;
        description: string;
    };
}

interface ServerBtcAddressResult {
    type: 'address';
    currency: 'btc';
    data: ServerBtcAddressData;
}

interface ServerBtcAddressData {
    hash160: string;
    address: string;
    countTxs: number;
    countUnredeemed: number;
    totalReceived: number;
    totalSent: number;
    balance: number;
}
