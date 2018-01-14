import Advert from "../models/Advert";
import CryptoCurrency from "../models/CryptoCurrency";
import SearchResult, {SearchType} from "../models/SearchResult";
import {default as EthplorerAddressInfo} from "../models/TokenInfo";

class SearchRepositoryImpl {

    _mapToResult = (getActualModel: any[]): SearchResult[] => {
        if (getActualModel == null || !getActualModel.hasOwnProperty('length')) {
            return [];
        }
        return getActualModel.map(item => {
            if (!item.hasOwnProperty("type")) {
                throw "Illegal type of items: " + JSON.stringify(item);
            }

            let target: SearchResult;
            console.log(item.type, SearchType.ETHEREUM_ADDRESS);

            switch (item.type) {
                case SearchType.ADVERT:
                    target = new Advert();
                    break;

                case SearchType.CRYPTO_CURRENCY:
                    target = new CryptoCurrency();
                    break;

                case SearchType.ETHEREUM_ADDRESS:
                    target = new EthplorerAddressInfo();
                    break;

                default:
                    throw "undefined type of item: " + JSON.stringify(item);
            }

            return Object.assign(target, item)
        });
    };

    doSearch = (request: string, page: number, size: number): Promise<SearchResult[]> => {
        const requestApi = `/advert/?request=${request}&page=${page}&pagesize=${size}`;

        return fetch(requestApi)
            .then((response) => (response.json()))
            .then(this._mapToResult);
    };

}

const SearchRepository = new SearchRepositoryImpl();

export default SearchRepository;