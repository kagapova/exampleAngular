interface TransactionResultServer {
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
        operations: any;
    };
}
