import {CurrencyResult} from '../../models/search-currency-result';


export function parseCurrencyResult(result: CurrencyResultServer): CurrencyResult {
    let chartValues = [];
    if (result.data.chart) {
        chartValues = result.data.chart.map(v => {
            return {x: v.timestamp, y: v.closeValue};
        });
    }

    return new CurrencyResult(
        result.data.name,
        result.data.fullName,
        result.data.coinName,
        result.data.symbol,
        result.data.image,
        result.data.url,
        result.data.totalCoinSupply,
        result.data.price,
        chartValues,
    );
}
