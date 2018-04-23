interface SuggestionsResponse{
    suggestions: SuggestEntryServer[];
}

interface SuggestEntryServer {
    frequency: number;
    text: string;
}
