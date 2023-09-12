"use client"
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query"
import { getUserDetails, getUserRepo, searchUsers } from "../services/github-service"
import { GithubUserProps, QueryParamsProps, RepoCardProps } from "../types/types";
import { useSearchParams, useRouter } from "next/navigation";

export const useSearchUsers = ({
    page,
    per_page
}: QueryParamsProps) => {
    const router = useRouter()
    const [searchQuery, setSearchQuery] = useState<string>('');
    const searchParams = useSearchParams();
    const username = searchParams.get("username") || '';
    const isQueryEmpty = searchQuery === "";
    
    const redirectToSearchPage = () => {
        if (!isQueryEmpty) router.push(`/search?username=${searchQuery}`)
    }
    
    const { data = [], isLoading, refetch: refetchUsers } = useQuery<GithubUserProps[], Error>(['searchUsers'], () => searchUsers({ q: username, page, per_page }), { enabled: false });

    useEffect(() => {
        if (username) {
            setSearchQuery(username)
            refetchUsers()
        }
    }, [username])

    return {
        data,
        isLoading,
        isQueryEmpty,
        searchQuery,
        setSearchQuery,
        refetchUsers,
        redirectToSearchPage
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