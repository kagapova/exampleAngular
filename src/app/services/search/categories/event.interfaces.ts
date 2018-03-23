interface EventServer {
    type: 'event';
    source: string;
    click: string;
    data: {
        company: string;
        date: string;
        event: string;
        description: string;
        proof: string;
        source: string;
        token: string;
    }
}
