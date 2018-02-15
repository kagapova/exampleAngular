import {WebResult} from '../../models/web-result';


export function parseWebResult(result: WebResultServer): WebResult {
    return new WebResult(
        result.data.title,
        result.data.text,
        result.data.image,
        result.data.url
    );
}
