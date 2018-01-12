import * as React from 'react';
import CryptoCurrency, {CryptoCurrencyChart} from "../../../repositories/models/CryptoCurrency";
import DateTimeFormatOptions = Intl.DateTimeFormatOptions;

const {AreaChart, Area, Tooltip, CartesianGrid, XAxis, YAxis} = require("recharts");

interface Prop {
    item: CryptoCurrency;
}

const CHART_DATA = "date";
const CHART_PRICE = "price";
const DATE_FORMAT: DateTimeFormatOptions = {
    year: "2-digit",
    month: "short",
    day: "2-digit"
};

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
                            {this.renderChart(this.props.item.chart)}
                            <a target="_blank" href={this.props.item.data.url}
                               className="card-link">{this.props.item.data.url}</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    renderChart(data: Array<CryptoCurrencyChart>): any {
        if (!data || data.length == 0) {
            return "";

        }
        return <AreaChart width={600} height={200} data={this.generateData(data)}
                          margin={{top: 10, right: 30, left: 0, bottom: 0}}>
            <XAxis dataKey="date"/>
            <YAxis/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip/>
            <Area type='monotone' dataKey='price' stroke='#82ca9d' fill='#82ca9d'/>
        </AreaChart>
    }

    generateData(data: Array<CryptoCurrencyChart>): Array<object> {
        const result: Array<any> = [];
        let chartItem: any;

        for (let item of data) {
            chartItem = {};
            chartItem[CHART_DATA] = new Date(item.timestamp * 1000).toLocaleDateString(['en-US'], DATE_FORMAT);
            chartItem[CHART_PRICE] = item.closeValue;
            result.push(chartItem);
        }

        return result;
    }

}

export default CryptoCurrencyHolder;
