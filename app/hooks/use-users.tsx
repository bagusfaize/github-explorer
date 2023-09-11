import { useState } from "react";
import { useQuery } from "@tanstack/react-query"
import { searchUsers } from "../services/github-service"
import { GithubUserProps, QueryParamsProps } from "../types/types";

export const useSearchUsers = ({
    page,
    per_page
}: QueryParamsProps) => {
    const [searchQuery, setSearchQuery] = useState<string>('')

    const { data, isLoading, refetch } = useQuery<GithubUserProps[], Error>(['searchUsers'], () => searchUsers({ q:searchQuery, page, per_page }), { enabled: false });

    return {
        data,
        isLoading,
        searchQuery,
        setSearchQuery,
        refetch
    }
}