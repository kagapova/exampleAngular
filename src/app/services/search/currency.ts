import {ChartValue, CurrencyDelta, CurrencyResult} from '../../models/currency-result';


export function parseCurrencyResult(result: CurrencyResultServer): CurrencyResult {
    if (!result.data.chart) {
        return null;
    }

    let startValue = result.data.chart[0];
    let endValue = result.data.chart[result.data.chart.length - 1];
    let deltaValue = endValue.closeValue - startValue.closeValue;

    let deltaPercent = deltaValue / (startValue.closeValue / 100);
    deltaPercent = Math.round(100 * deltaPercent) / 100;

    let chartValues = [];
    let minValue = 0;
    let maxValue = 0;
    if (result.data.chart) {
        chartValues = result.data.chart.map(v => {
            if (v.closeValue < minValue) {
                minValue = v.closeValue;
            }

            if (v.closeValue > maxValue) {
                maxValue = v.closeValue;
            }

            return new ChartValue(v.timestamp, v.closeValue);
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
        new CurrencyDelta(
            {
                date: getDate(startValue.timestamp),
                value: startValue.closeValue,
            },
            {
                date: getDate(endValue.timestamp),
                value: endValue.closeValue,
            },
            startValue.closeValue,
            startValue.closeValue,
            deltaValue,
            deltaPercent
        ),
    );
}

function getDate(timestamp: number): Date {
    let date = new Date();
    date.setTime(timestamp * 1000);

    return date;
}
