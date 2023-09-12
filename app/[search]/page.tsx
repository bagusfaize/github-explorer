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

export default function SearchPage() {
    const searchParams = useSearchParams();
    const username = searchParams.get("username");
    const router = useRouter()
    const { expanded, setExpanded } = useAccordion();
    const { repos, setSelectedUser } = useUserRepo();


    const {
        data,
        redirectToSearchPage,
        searchQuery,
        setSearchQuery
    } = useSearchUsers({
        page: 1,
        per_page: 6
    });

    const handleSearch = () => {
        redirectToSearchPage()
    }

    const handleOpenAccordion = (value: number | boolean, username: string) => {
        setExpanded(value)
        setSelectedUser(username)
    }

    return (
        <div className="flex flex-col items-center justify-center mx-10">
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
                {data.map((user, i) => (
                    <Accordion
                        i={i}
                        key={user.id}
                        user={user}
                        isOpen={i === expanded}
                        setExpanded={(value) => handleOpenAccordion(value, user.login)}
                    >
                        <div className="grid grid-cols-6 pt-4 gap-4">
                            {repos.map(repo => {
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
