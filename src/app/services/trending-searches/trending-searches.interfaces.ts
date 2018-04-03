type TrendsResponse = {
    requests: TrendResponse[],
    trendingRequests: TrendRequestResponse[],
}

type TrendResponse = {
    request: string
    count: number
}

type TrendRequestResponse = {
    request: string
}
