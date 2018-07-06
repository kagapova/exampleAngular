interface TrendsResponse {
    requests: TrendResponse[];
    trendingRequests: TrendRequestResponse[];
}

interface TrendResponse {
    request: string;
    count: number;
}

interface TrendRequestResponse {
    request: string;
}
