import * as React from 'react';
import '../../../res/syles/AdvertHolder.css';
import CryptoCurrency from "../../../repositories/models/CryptoCurrency";

interface Prop {
    item: CryptoCurrency;
}

class CryptoCurrencyHolder extends React.Component<Prop, object> {
    render() {
        return (
            <div className="card">
                <div className="card-block">
                    <div className="row">
                        <div className="col-1 m-sm-auto">
                            <img className="img-thumbnail" src={this.props.item.data.image}/>
                        </div>
                        <div className="col-11">
                            <h2 className="card-title">{this.props.item.data.fullName}</h2>
                            <p className="card-text">${this.props.item.catUsd}</p>
                            <a target="_blank" href={this.props.item.data.url}
                               className="card-link">{this.props.item.data.url}</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CryptoCurrencyHolder;
