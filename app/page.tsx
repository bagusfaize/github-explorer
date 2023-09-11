"use client"

import Accordion from "./components/accordion";
import InputSearch from "./components/input-search";
import { useSearchUsers, useUserRepo } from "./hooks/use-users";
import { useAccordion } from "./hooks/use-accordion";
import RepoCard from "./components/repo-card";

export default function Home() {
  const { expanded, setExpanded } = useAccordion();
  const { repos, setSelectedUser } = useUserRepo();
  const {
    data,
    refetch,
    searchQuery,
    setSearchQuery
  } = useSearchUsers({
    page: 1,
    per_page: 6
  });

  const handleSearch = () => {
    refetch()
  }

  const handleOpenAccordion = (value: number | boolean, username: string) => {
    setExpanded(value)
    setSelectedUser(username)
  }

  return (
    <main className="min-h-screen mx-10">
      <div className="flex flex-col items-center justify-center">
        <div className="my-5">
          <h1 className="text-3xl text-center">GitHub Explorer</h1>
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
                    return(
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
    </main>
  )
}