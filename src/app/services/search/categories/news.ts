import {News} from '@app/models/news';

export function parseNews(resp: NewsServer): News {
    return new News(
        resp.data.title,
        resp.data.text,
        new Date(resp.data.publishedTime * 1000),
        resp.data.url,
        resp.data.image,
        resp.data.source,
        resp.click
    );
}
