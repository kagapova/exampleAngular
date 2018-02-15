import {CurrencyResult} from '../../models/currency-result';


export function parseCurrencyResult(result: CurrencyResultServer): CurrencyResult {
    let chartValues = [];
    if (result.data.chart) {
        chartValues = result.data.chart.map(v => {
            return {x: v.timestamp, y: v.closeValue};
        });
    }

    let price = result.data.price;
    if (chartValues.length) {
        price = chartValues[chartValues.length - 1].y;
    }

    return new CurrencyResult(
        result.data.name,
        result.data.fullName,
        result.data.coinName,
        result.data.symbol,
        result.data.image,
        result.data.url,
        result.data.totalCoinSupply,
        price,
        chartValues,
    );
}
