type TrendsResponse = {
    requests: TrendResponse[]
}

type TrendResponse = {
    request: string
    count: number
}
