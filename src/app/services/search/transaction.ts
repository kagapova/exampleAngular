import {
    BtcTransaction,
    BtcTransactionInput,
    BtcTransactionOutput,
    DashTransaction,
    DashTransactionInput,
    DashTransactionOutput,
    EthTransaction,
    EthTransactionTransfer,
    LtcTransaction,
    LtcTransactionInput,
    LtcTransactionOutput,
    Transaction,
} from '../../models/transaction';
import {Token} from '../../models/token';


export function parseTransaction(result: TransactionServer): Transaction {
    switch (result.currency) {
        case 'eth':
            return parseEthTransaction(result);

        case 'btc':
            return parseBtcTransaction(result);

        case 'ltc':
            return parseLtcTransaction(result);

        case 'dash':
            return parseDashTransaction(result);

        default:
            throw new Error(`New transaction currency: ${result.currency}`);
    }
}


function parseEthTransaction(result: EthTransactionServer): EthTransaction {
    let createdAt = new Date();
    createdAt.setTime(result.data.timestamp * 1000);

    let transfer: EthTransactionTransfer = null;
    let toToken: Token = null;
    if (result.data.operations && result.data.operations.length === 1) {
        let operation = result.data.operations[0];

        toToken = new Token(
            operation.tokenInfo.address,
            operation.tokenInfo.name,
            operation.tokenInfo.symbol,
            operation.tokenInfo.image,
            operation.tokenInfo.decimals,
            parseFloat(operation.tokenInfo.price.marketCapUsd)
        );
        transfer = new EthTransactionTransfer(
            toToken,
            operation.value / 10 ** toToken.decimals,
            operation.from,
            operation.to
        );
    } else if (result.data.operations && result.data.operations.length > 1) {
        throw new Error();
    }

    let isPending = false;
    let isError = false;

    return new EthTransaction(
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


function parseBtcTransaction(result: BtcTransactionServer): BtcTransaction {
    let inputs: BtcTransactionInput[] = result.data.inputs.map(v => {
        return new BtcTransactionInput(
            v.prevOut.address,
            v.prevOut.value / 100000000
        );
    });

    let outputs: BtcTransactionOutput[] = result.data.outputs.map(v => {
        return new BtcTransactionOutput(
            v.address,
            v.value / 100000000
        );
    });

    return new BtcTransaction(
        result.data.hash,
        result.data.blockHeight,
        result.data.size,
        inputs,
        outputs
    );
}


function parseLtcTransaction(result: LtcTransactionServer): LtcTransaction {
    let inputs: LtcTransactionInput[] = result.data.inputs.map(v => {
        return new LtcTransactionInput(
            v.addresses[0],
            v.outputValue / 100000000,
            v.prevHash
        );
    });

    let outputs: LtcTransactionOutput[] = result.data.outputs.map(v => {
        return new LtcTransactionOutput(
            v.addresses[0],
            v.value / 100000000
        );
    });

    return new LtcTransaction(
        result.data.hash,
        result.data.blockHash,
        result.data.blockHeight,
        result.data.blockIndex,
        result.data.fees / 100000000,
        result.data.size,
        result.data.total / 100000000,
        inputs,
        outputs
    );
}


function parseDashTransaction(result: DashTransactionServer): DashTransaction {
    let inputs: DashTransactionInput[] = result.data.inputs.map(v => {
        return new DashTransactionInput(
            v.addresses[0],
            v.outputValue / 100000000,
            v.prevHash
        );
    });

    let outputs: DashTransactionOutput[] = result.data.outputs.map(v => {
        return new DashTransactionOutput(
            v.addresses[0],
            v.value / 100000000
        );
    });

    return new DashTransaction(
        result.data.hash,
        result.data.blockHash,
        result.data.blockHeight,
        result.data.blockIndex,
        result.data.fees / 100000000,
        result.data.size,
        result.data.total / 100000000,
        inputs,
        outputs
    );
}
