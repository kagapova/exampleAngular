import {Exchange, ExchangeCurrencyRate} from '../../../models/exchange';


export function parseExchange(exchange: ExchangeServer): Exchange {
    if (exchange.source !== 'cryptocompare') {
        return null;
    }

    return new Exchange(
        exchange.data.name,
        exchange.data.description,
        exchange.data.country,
        exchange.data.logoUrl,
        exchange.data.itemType,
        exchange.data.affiliateUrl,
        parseSnapshots(exchange.data.snapshots),
        exchange.data.cryptoCompareUrl,
        exchange.click
    );
}

function parseSnapshots(snapshots: ExchangeSnapshotServer[]): ExchangeCurrencyRate[] {
    return snapshots.map(snapshot => {
        return new ExchangeCurrencyRate(
            snapshot.fromSymbol,
            snapshot.toSymbol,
            snapshot.price,
            snapshot.open24Hour,
            snapshot.high24Hour,
            snapshot.low24Hour,
            snapshot.volume24Hour,
            snapshot.volume24HourTo);
    });
}
