import {TransactionResult} from '../../models/transaction-result';
import {Ethereum} from '../../models/blockchains';


export function parseTransactionResult(result: TransactionResultServer): TransactionResult {
    let createdAt = new Date();
    createdAt.setTime(result.data.timestamp * 1000);

    return new TransactionResult(
        Ethereum,
        result.data.hash,
        result.data.blockNumber,
        result.data.confirmations,
        result.data.success,
        result.data.from,
        result.data.to,
        result.data.value,
        result.data.input,
        result.data.gasLimit,
        result.data.gasUsed,
        createdAt
    );
}
