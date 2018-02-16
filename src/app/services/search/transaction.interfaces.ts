interface TransactionServer {
    type: 'txn';
    currency: any;
    data: any;
}

interface EthTransactionServer extends TransactionServer {
    type: 'txn';
    currency: 'eth';
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
        operations: EthTransactionOperationServer[];
    };
}


interface EthTransactionOperationServer {
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
    tokenInfo: EthTransactionTokenInfoServer;
}


interface EthTransactionTokenInfoServer {
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


interface BtcTransactionServer extends TransactionServer {
    type: 'txn';
    currency: 'btc';
    data: {
        blockHeight: number;
        hash: string;
        inputs: BtcTransactionInputServer[];
        outputs: BtcTransactionOutputServer[];
        size: number;
    };
}


interface BtcTransactionInputServer {
    prevOut: {
        address: string;
        value: number;
    };
}


interface BtcTransactionOutputServer {
    address: string;
    value: number;
}
