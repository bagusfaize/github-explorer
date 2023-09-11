
export type GithubUserProps = {
    login: string;
    id: number;
    avatar_url: string;
}

export type QueryParamsProps = {
    q?: string,
    page?: number,
    per_page?: number
}

export type InputSearchProps = {
    searchQuery: string,
    onInputChange: (query: string) => void, 
    onSearch: () => void
}

export type RepoCardProps = {
    id?: number,
    name: string,
    description: string,
    stargazers_count: number,
    html_url: string,
  }