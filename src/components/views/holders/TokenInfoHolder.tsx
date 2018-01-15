import * as React from 'react';
import EthplorerAddressInfo from "../../../repositories/models/TokenInfo";
import Config from "../../../Config";

interface Prop {
    item: EthplorerAddressInfo;
}

class TokenInfoHolder extends React.Component<Prop, object> {
    render() {
        return (
            <div className="card">
                <div className="card-block">
                    <div className="row">
                        <div className="col-11">
                            {this.getTitle()}
                            {this.getText()}
                            <a target="_blank"
                               href={Config.getEtherscanAddressPath() + this.props.item.address}
                               className="card-link">{Config.getEtherscanAddressPath() + this.props.item.address}</a>
                            <br/>
                            <a target="_blank"
                               href={Config.getEthplorerAddressPath() + this.props.item.address}
                               className="card-link">{Config.getEthplorerAddressPath() + this.props.item.address}</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    getTitle(): any {
        const item = this.props.item;
        return <h2 className="card-title">{item.tokenName ? item.tokenName : item.address}</h2>
    }

    getText(): any {
        const eth = this.props.item.eth;

        return <div className="card-text">
            Balance: {eth.balance} ETH
            <br/>
            Total in: {eth.totalIn} ETH
            <br/>
            Total out: {eth.totalOut} ETH
            <br/>
            Transaction count: {this.props.item.countTxs}
        </div>
    }

}

export default TokenInfoHolder;
