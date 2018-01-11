import * as React from 'react';
import '../../../res/syles/SearchResultList.css';
import AdvertHolder from "../holders/AdvertHolder";
import SearchResult from "../../../repositories/models/SearchResult";
import Advert from "../../../repositories/models/Advert";
import CryptoCurrencyHolder from "../holders/CryptoCurrencyHolder";
import CryptoCurrency from "../../../repositories/models/CryptoCurrency";

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
            return item instanceof Advert
                ? <AdvertHolder item={item as Advert} key={index}/>
                : <CryptoCurrencyHolder item={item as CryptoCurrency} key={index}/>
        });
    }
}

export default SearchResultList;
