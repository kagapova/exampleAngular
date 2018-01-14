import SearchResult, {SearchType} from "./SearchResult";

export default class Advert implements SearchResult {

    id: number;
    image: string;
    text: string;
    title: string;
    tokens: number;
    url: string;
    type: SearchType;

}
