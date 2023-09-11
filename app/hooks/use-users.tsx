"use client"
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query"
import { getUserDetails, getUserRepo, searchUsers } from "../services/github-service"
import { GithubUserProps, QueryParamsProps, RepoCardProps } from "../types/types";

export const useSearchUsers = ({
    page,
    per_page
}: QueryParamsProps) => {
    const [searchQuery, setSearchQuery] = useState<string>('')

    const { data = [], isLoading, refetch } = useQuery<GithubUserProps[], Error>(['searchUsers'], () => searchUsers({ q: searchQuery, page, per_page }), { enabled: false });

    return {
        data,
        isLoading,
        searchQuery,
        setSearchQuery,
        refetch
    }
}

export const useUserRepo = () => {
    const [selectedUser, setSelectedUser] = useState<string>('')
    const { data: repos = [], isLoading, refetch: refetchRepos } = useQuery<RepoCardProps[], Error>(['userRepo'], () => getUserRepo({q: selectedUser}), { enabled: false });
    
    useEffect(() => {
    if (selectedUser) refetchRepos()
    }, [selectedUser])

    return {
        repos,
        isLoading,
        refetchRepos,
        setSelectedUser,
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