interface CalcResultServer {
    type: 'calc';
    source: string;
    click: string;
    data: {
        from: string;
        to: string;
        amount: number;
        rate: number;
    };
}
