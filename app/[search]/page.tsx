"use client"

import React from 'react'
import { useSearchParams } from 'next/navigation';
import InputSearch from '../components/input-search';
import { useSearchUsers, useUserRepo } from '../hooks/use-users';
import { useAccordion } from '../hooks/use-accordion';
import Accordion from '../components/accordion';
import RepoCard from '../components/repo-card';
import Link from 'next/link';
import { useRouter } from "next/navigation";
import RepoSkeleton from '../components/skeleton/repo-skeleton';
import ProfileSkeleton from '../components/skeleton/profile-skeleton';
import Image from 'next/image';

export default function SearchPage() {
    const searchParams = useSearchParams();
    const username = searchParams.get("username");
    const router = useRouter()
    const { expanded, setExpanded } = useAccordion();
    const { repos, setSelectedUser, isReposEmpty, isLoadingRepos } = useUserRepo();

    const {
        users,
        searchQuery,
        isLoadingUsers,
        isUsersEmpty,
        setSearchQuery,
        redirectToSearchPage,
    } = useSearchUsers({
        page: 1,
        per_page: 5
    });

    const handleSearch = () => {
        redirectToSearchPage()
    }

    const handleOpenAccordion = (value: number | boolean, username: string) => {
        setExpanded(value)
        setSelectedUser(username)
    }

    return (
        <div className="flex flex-col items-center justify-center px-4 sm:px-10 pb-10">
            <div className="my-5 w-full md:w-2/3">
                <Link href="/">
                    <h1 className="text-3xl text-center">GitHub Explorer</h1>
                </Link>
                <InputSearch
                    searchQuery={searchQuery}
                    onInputChange={(value) => setSearchQuery(value)}
                    onSearch={handleSearch}
                />
            </div>
            <div className="grid grid-cols-1 gap-5 w-full md:w-2/3">
                {isUsersEmpty && <EmptyUserState/>}
                {isLoadingUsers && <UserLoadingSkeleton />}
                {!isLoadingUsers && users.map((data, i) => (
                    <Accordion
                        i={i}
                        key={data.id}
                        user={data}
                        isOpen={i === expanded}
                        setExpanded={(value) => handleOpenAccordion(value, data.login)}
                    >
                        <div className="grid grid-cols-12 pt-4 gap-4">
                            {isReposEmpty && <EmptyRepoState/>}
                            {isLoadingRepos && <RepoLoadingSkeleton />}
                            {!isLoadingRepos && repos.map(repo => {
                                return (
                                    <RepoCard
                                        key={repo.id}
                                        name={repo.name}
                                        description={repo.description}
                                        stargazers_count={repo.stargazers_count}
                                        html_url={repo.html_url}
                                    />
                                )
                            })}
                        </div>
                    </Accordion>
                ))}
            </div>
        </div>
    )
}

function RepoLoadingSkeleton() {
    return (
        [...Array(6)].map((v,i) => (<RepoSkeleton key={`reposkeleton-${i}`}/>))
    )
}

function UserLoadingSkeleton() {
    return (
        [...Array(6)].map((v,i) => (<ProfileSkeleton key={`profileskeleton-${i}`} />))
    )
}

function EmptyUserState() {
    return(
        <div className="flex flex-col items-center justify-center text-gray-500 text-sm py-20">
            <Image src="empty-user.svg" alt="not-found" width="150" height="150" />
            <span className="my-5">Oops! User not found.</span>
        </div>
    )
}

function EmptyRepoState() {
    return(
        <div className="flex flex-col items-center justify-center text-gray-500 text-sm py-20 col-span-12">
            <Image src="empty-repo.svg" alt="not-found" width="100" height="100" />
            <span className="my-5">Oops! Repo not found.</span>
        </div>
    )
}