interface NewsServer {
    type: 'news';
    source: string;
    click: string;
    url: string;
    data: {
        url: string;
        title: string;
        text: string;
        image: string;
        publishedTime: number;
        source: string;
    }
}
