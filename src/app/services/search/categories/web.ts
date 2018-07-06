import { WebResult } from '@app/models/web-result';

export function parseWebResult(result: WebResultServer): WebResult {
    return new WebResult(
        result.data.title,
        result.data.text,
        getFaviconUrl(result.data.url),
        result.data.url,
        result.click
    );
}

export function getFaviconUrl(link: string): string {
    return `https://www.google.com/s2/favicons?domain=${link}`;
}
