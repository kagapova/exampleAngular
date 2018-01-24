import * as React from 'react';
import Advert from "../../../repositories/models/Advert";

interface Prop {
    item: Advert;
}

class AdvertHolder extends React.Component<Prop, object> {
    render() {
        return (
            <div className="card">
                <div className="card-block">
                    <div className="row">
                        <div className="col-1 m-sm-auto">
                            <img className="img-thumbnail" src={this.props.item.image}/>
                        </div>
                        <div className="col-11">
                            <h2 className="card-title">{this.props.item.title}</h2>
                            <p className="card-text">{this.props.item.text}</p>
                            <a target="_blank" href={this.props.item.url} className="card-link">{this.props.item.url}</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdvertHolder;
