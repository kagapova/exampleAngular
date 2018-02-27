import {ChartValue, Currency, Company, ICO} from '../../models/currency';


export function parseCurrencyResult(result: CurrencyServer): Currency {
    if (result.source !== 'mixed') {
        return null;
    }

    return new Currency(
        result.data.name,
        result.data.symbol,
        result.data.image,
        result.data.urls,
        result.data.totalCoinSupply,
        result.data.price,
        getTimePeriodChartValues(result),
        getCompany(result),
        getICO(result)
    );
}


function getICO(result: CurrencyServer): ICO {
    if (result.data.ico.status === 'N/A') {
        return null;
    }

    return new ICO(
        result.data.ico.status,
        result.data.ico.fundingTarget,
        result.data.ico.fundingCap,
        result.data.ico.tokenType
    );
}


function getCompany(result: CurrencyServer): Company {
    return new Company(
        result.data.name,
        result.data.company.description,
        result.data.company.features,
        result.data.company.proofType,
        result.data.company.technology
    );
}


function getTimePeriodChartValues(response: CurrencyServer): Map<string, ChartValue[]> {
    let result = new Map<string, ChartValue[]>();
    result[Currency.TimePeriod1d] = getChartValues(response.data.charts['1d']);
    result[Currency.TimePeriod1w] = getChartValues(response.data.charts['1w']);
    result[Currency.TimePeriod1m] = getChartValues(response.data.charts['1m']);
    result[Currency.TimePeriod3m] = getChartValues(response.data.charts['3m']);
    result[Currency.TimePeriod1y] = getChartValues(response.data.charts['1y']);
    result[Currency.TimePeriod5y] = getChartValues(response.data.charts['5y']);

    return result;
}


function getChartValues(chart: CurrencyChartServer[]): ChartValue[] {
    return chart.map(v => {
        return new ChartValue(v.timestamp, v.closeValue);
    });
}
