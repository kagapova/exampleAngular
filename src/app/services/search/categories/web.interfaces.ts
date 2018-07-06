interface WebResultServer {
    type: 'web';
    source: string;
    click: string;
    data: {
        title: string;
        text: string;
        image: string;
        url: string;
    };
}
