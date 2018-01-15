import * as React from 'react';
import Config from '../../../Config';
import EthTxInfo from '../../../repositories/models/EthTxInfo';
import DateTimeFormatOptions = Intl.DateTimeFormatOptions;

interface Prop {
    item: EthTxInfo;
}

const DATE_FORMAT: DateTimeFormatOptions = {
    year: '2-digit',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
};

class TxInfoHolder extends React.Component<Prop, object> {
    render() {
        return (
            <div className="card">
                <div className="card-block">
                    <div className="row">
                        <div className="col-11">
                            <h2 className="card-title">{this.props.item.hash}</h2>
                            {this.getText()}
                            <a target="_blank"
                               href={Config.getEhterscanTxPath() + this.props.item.hash}
                               className="card-link">{Config.getEhterscanTxPath() + this.props.item.hash}</a>
                            <br/>
                            <a target="_blank"
                               href={Config.getEthplorerTxPath() + this.props.item.hash}
                               className="card-link">{Config.getEthplorerTxPath() + this.props.item.hash}</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    getText(): any {
        const info = this.props.item;

        return <div className="card-text">
            Nonce: {info.confirmations}
            <br/>
            From: {info.from}
            <br/>
            To: {info.to}
            <br/>
            Gas used: {info.gasUsed}
            <br/>
            Block number: {info.blockNumber}
            <br/>
            Value : {info.value} ETH
            <br/>
            Date : {new Date(info.timestamp * 1000).toLocaleDateString('en', DATE_FORMAT)}
            <br/>
            Count of operations: {info.operations.length}
            <br/>
            Success : {info.success + ""}
        </div>
    }

}

export default TxInfoHolder;
