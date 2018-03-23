import {WebResult} from '../../../models/web-result';


export function parseWebResult(result: WebResultServer): WebResult {
    return new WebResult(
        result.data.title,
        result.data.text,
        getFaviconURL(result.data.url),
        result.data.url,
        result.click
    );
}

function getFaviconURL(link: string): string {
    const url = link.split('/');
    return `//${url[2]}/favicon.ico`;
}
