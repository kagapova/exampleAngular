import * as React from 'react';
import '../../../res/syles/SearchResultList.css';
import AdvertHolder from "../holders/AdvertHolder";
import SearchResult, {SearchType} from "../../../repositories/models/SearchResult";
import Advert from "../../../repositories/models/Advert";
import CryptoCurrencyHolder from "../holders/CryptoCurrencyHolder";
import CryptoCurrency from "../../../repositories/models/CryptoCurrency";
import TokenInfoHolder from "../holders/TokenInfoHolder";
import {default as EthplorerAddressInfo} from "../../../repositories/models/TokenInfo";
import BitcoinInfoHolder from "../holders/BitcoinInfoHolder";
import BitcoinInfo from "../../../repositories/models/BitcoinInfo";

interface Properties {
    result: Array<SearchResult>;
}

class SearchResultList extends React.Component<Properties, {}> {

    render() {
        return (
            <div className="searchResultList">
                {this.bindItems()}
            </div>
        );
    }

    bindItems() {
        const {result} = this.props;
        return result.map((item, index) => {
            return this.getHolderByType(item, index)
        });
    }

    getHolderByType(item: SearchResult, index: number): any {
        switch (item.type) {
            case SearchType.ADVERT:
                return <AdvertHolder item={item as Advert} key={index}/>;

            case SearchType.CRYPTO_CURRENCY:
                return <CryptoCurrencyHolder item={item as CryptoCurrency} key={index}/>;

            case SearchType.ETHEREUM_ADDRESS:
                return <TokenInfoHolder item={item as EthplorerAddressInfo} key={index}/>;

            case SearchType.BITCOIN_ADDRESS:
                return <BitcoinInfoHolder item={item as BitcoinInfo} key={index}/>;

            default:
                throw "undefined type of item: " + JSON.stringify(item);
        }

    }
}

export default SearchResultList;
