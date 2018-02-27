import {ChartValue, CurrencyDelta, Currency, Company, ICO} from '../../models/currency';


export function parseCurrencyResult(result: CurrencyServer): Currency {
    if (result.source !== 'cryptocompare') {
        return null;
    }

    let chartValues = result.data.chart.map(v => {
        return new ChartValue(v.timestamp, v.closeValue);
    });

    let price = result.data.price;
    if (chartValues.length) {
        price = chartValues[chartValues.length - 1].y;
    }

    return new Currency(
        result.data.name,
        result.data.fullName,
        result.data.coinName,
        result.data.symbol,
        result.data.image,
        result.data.url,
        result.data.totalCoinSupply,
        price,
        chartValues,
        getcurrencyDelta(result),
        getCompany(result),
        getICO(result)
    );
}


function getICO(result: CurrencyServer): ICO {
    if (result.data.detailedInfo.ico.status === 'N/A') {
        return null;
    }

    return new ICO(
        result.data.detailedInfo.ico.status,
        result.data.detailedInfo.ico.fundingTarget,
        result.data.detailedInfo.ico.fundingCap,
        result.data.detailedInfo.ico.tokenType
    );
}


function getCompany(result: CurrencyServer): Company {
    return new Company(
        result.data.coinName,
        result.data.detailedInfo.general.description,
        result.data.detailedInfo.general.features,
        result.data.detailedInfo.general.proofType,
        result.data.detailedInfo.general.technology
    );
}


function getcurrencyDelta(result: CurrencyServer): CurrencyDelta {
    let startValue = result.data.chart[0];
    let endValue = result.data.chart[result.data.chart.length - 1];
    let deltaValue = endValue.closeValue - startValue.closeValue;

    let deltaPercent = deltaValue / (startValue.closeValue / 100);
    deltaPercent = Math.round(100 * deltaPercent) / 100;

    let minValue = 999999999999;
    let maxValue = 0;
    for (let char of result.data.chart) {
        if (char.closeValue < minValue) {
            minValue = char.closeValue;
        }

        if (char.closeValue > maxValue) {
            maxValue = char.closeValue;
        }
    }

    return new CurrencyDelta(
        {
            date: getDate(startValue.timestamp),
            value: startValue.closeValue,
        },
        {
            date: getDate(endValue.timestamp),
            value: endValue.closeValue,
        },
        minValue,
        maxValue,
        deltaValue,
        deltaPercent
    );
}


function getDate(timestamp: number): Date {
    let date = new Date();
    date.setTime(timestamp * 1000);

    return date;
}
