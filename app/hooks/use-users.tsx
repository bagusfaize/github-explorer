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

    const {
        data: users = [],
        isLoading,
        isRefetching,
        refetch: refetchUsers
    } = useQuery<GithubUserProps[], Error>(['searchUsers'], () => searchUsers({ q: username, page, per_page }), { enabled: false });

    const isLoadingUsers = isLoading || isRefetching;

    const isUsersEmpty = !isLoadingUsers && !users.length;

    useEffect(() => {
        if (username) {
            setSearchQuery(username)
            refetchUsers()
        }
    }, [username])

    return {
        users,
        isQueryEmpty,
        searchQuery,
        isLoadingUsers,
        isUsersEmpty,
        setSearchQuery,
        refetchUsers,
        redirectToSearchPage
    }
}

export const useUserRepo = () => {
    const [selectedUser, setSelectedUser] = useState<string>('')
    const {
        data: repos = [],
        isLoading,
        refetch: refetchRepos,
        isRefetching
    } = useQuery<RepoCardProps[], Error>(['userRepo'], () => getUserRepo({ q: selectedUser }), { enabled: false });

    useEffect(() => {
        if (selectedUser) refetchRepos()
    }, [selectedUser])

    const isLoadingRepos = isLoading || isRefetching;

    const isReposEmpty = !isLoadingRepos && !repos.length;

    console.log('clg repos', isLoading, repos);

    return {
        repos,
        isLoadingRepos,
        isReposEmpty,
        refetchRepos,
        setSelectedUser,
    }
}

export const useUserDetails = ({
    q
}: QueryParamsProps) => {

    const { data, isLoading } = useQuery<GithubUserProps, Error>(['userDetails'], () => getUserDetails({ q }));

    return {
        data,
        isLoading
    }

}