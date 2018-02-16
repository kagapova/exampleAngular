interface TransactionServer {
    type: 'txn';
    currency: string;
    data: {
        hash: string;
        timestamp: number;
        blockNumber: number;
        confirmations: number;
        success: boolean;
        from: string;
        to: string;
        value: number;
        input: string;
        gasLimit: number;
        gasUsed: number;
        logs: string[];
        operations: TransactionOperationServer[];
    };
}


interface TransactionOperationServer {
    type: 'transfer';
    addresses: string[];
    from: string;
    to: string;
    intValue: string;
    value: number;
    price: number;
    transactionHash: string;
    priority: number;
    timestamp: number;
    tokenInfo: TransactionTokenInfoServer;
}


interface TransactionTokenInfoServer {
    address: string;
    name: string;
    symbol: string;
    description: string;
    image: string;
    decimals: number;
    owner: string;
    holdersCount: number;
    totalSupply: string;
    issuancesCount: number;
    lastUpdated: number;
    price: {
        availableSupply: string;
        currency: string;
        diff: number
        diff7d: number;
        marketCapUsd: string;
        rate: string;
        ts: string;
        volume24h: string;
    };
}
