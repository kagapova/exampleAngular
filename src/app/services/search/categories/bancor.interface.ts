interface BancorServer {
    type: 'bancor';
    source: string;
    click: string;
    data: {
        id: string;
        ticker: string;
    }
}
