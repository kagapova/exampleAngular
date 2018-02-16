interface AddressResultServer {
    type: 'address';
    currency: any;
    data: any;
}

interface EthAddressResultServer {
    type: 'address';
    currency: 'eth';
    data: EthAddressDataServer;
}

interface EthAddressDataServer {
    address: string;
    eth: {
        balance: number;
        totalIn: number;
        totalOut: number;
    };
    countTxs: number;
    contractInfo: any;
    tokenInfo: any;
    tokens: AddressEthTokenServer[];
}

interface AddressEthTokenServer {
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

interface BtcAddressResultServer {
    type: 'address';
    currency: 'btc';
    data: BtcAddressDataServer;
}

interface BtcAddressDataServer {
    hash160: string;
    address: string;
    countTxs: number;
    countUnredeemed: number;
    totalReceived: number;
    totalSent: number;
    balance: number;
}
