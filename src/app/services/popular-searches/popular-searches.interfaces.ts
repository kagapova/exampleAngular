interface PopularSearchesResponse {
  popularSearches: PopularSearchEntryServer[];
}

interface PopularSearchEntryServer {
  type: string;
  displayName: string;
}
