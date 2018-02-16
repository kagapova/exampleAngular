import {Transaction, TransactionTransfer} from '../../models/transaction';
import {Ethereum} from '../../models/blockchains';
import {Token} from '../../models/token';


export function parseTransactionResult(result: TransactionServer): Transaction {
    let createdAt = new Date();
    createdAt.setTime(result.data.timestamp * 1000);

    let transfer: TransactionTransfer = null;
    let toToken: Token = null;
    if (result.data.operations.length === 1) {
        let operation = result.data.operations[0];

        toToken = new Token(
            operation.tokenInfo.address,
            operation.tokenInfo.name,
            operation.tokenInfo.symbol,
            operation.tokenInfo.image,
            operation.tokenInfo.decimals,
            parseFloat(operation.tokenInfo.price.marketCapUsd)
        );
        transfer = new TransactionTransfer(
            toToken,
            operation.value / 10 ** toToken.decimals,
            operation.from,
            operation.to
        );
    } else if (result.data.operations.length > 1) {
        throw new Error();
    }

    let isPending = false;
    let isError = false;

    return new Transaction(
        Ethereum,
        result.data.hash,
        result.data.blockNumber,
        result.data.confirmations,
        result.data.success,
        isPending,
        isError,
        result.data.from,
        null,
        result.data.to,
        toToken,
        result.data.value,
        transfer,
        result.data.input,
        result.data.gasLimit,
        result.data.gasUsed,
        createdAt
    );
}
