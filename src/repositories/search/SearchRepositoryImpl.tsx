import Advert from "../models/Advert";
import CryptoCurrency from "../models/CryptoCurrency";
import SearchResult from "../models/SearchResult";

class SearchRepositoryImpl {

    _mapToResult = (githubMembers: any[]): SearchResult[] => {
        if (githubMembers == null || !githubMembers.hasOwnProperty('length')) {
            return [];
        }
        return githubMembers.map(item => {
            return Object.assign(item.hasOwnProperty("id") ? new Advert() : new CryptoCurrency(), item)
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