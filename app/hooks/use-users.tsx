"use client"
import { useState } from "react";
import { useQuery } from "@tanstack/react-query"
import { getUserDetails, searchUsers } from "../services/github-service"
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

export const useUserDetails = ({
    q
}: QueryParamsProps ) => {

    const { data, isLoading } = useQuery<GithubUserProps, Error>(['userDetails'], () => getUserDetails({q}));

    return {
        data,
        isLoading
    }

}