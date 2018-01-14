import * as React from 'react';
import Config from "../../../Config";
import BitcoinInfo from "../../../repositories/models/BitcoinInfo";

const BigNumber = require('bignumber.js');

interface Prop {
    item: BitcoinInfo;
}

const BTC_INC: number = 0.00000001;
const BTC_DIGITS: number = 8;

class BitcoinInfoHolder extends React.Component<Prop, object> {

    render() {
        return (
            <div className="card">
                <div className="card-block">
                    <div className="row">
                        <div className="col-11">
                            <h2 className="card-title">{this.props.item.address}</h2>
                            {this.getText()}
                            <a target="_blank"
                               href={Config.getBlockChainInfoAddressPath() + this.props.item.address}
                               className="card-link">{Config.getBlockChainInfoAddressPath() + this.props.item.address}</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    getText(): any {
        const item = this.props.item;
        const balance = new BigNumber(item.balance).mul(BTC_INC);
        const received = new BigNumber(item.totalReceived).mul(BTC_INC);
        const sent = new BigNumber(item.totalSent).mul(BTC_INC);

        return <div className="card-text">
            hash160: {item.hash160}
            <br/>
            Balance: {balance.toFormat(BTC_DIGITS)} BTC
            <br/>
            Total Received: {received.toFormat(BTC_DIGITS)} BTC
            <br/>
            Total sent: {sent.toFormat(BTC_DIGITS)} BTC
            <br/>
            Transaction count: {item.countTxs}
        </div>
    }

}

export default BitcoinInfoHolder;
