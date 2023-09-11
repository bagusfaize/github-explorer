"use client"

import InputSearch from "./components/input-search";
import ProfileCard from "./components/profile-card";
import { useSearchUsers } from "./hooks/use-users"

export default function Home() {
  const {
    refetch,
    data = [],
    searchQuery,
    setSearchQuery
  } = useSearchUsers({
    page: 1,
    per_page: 6
  });

  const handleSearch = () => {
    refetch()
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full md:w-4/5">
          {data.map(user => (
            <ProfileCard
              key={user.id}
              id={user.id}
              login={user.login}
              avatar_url={user.avatar_url}
            />
          ))}
        </div>
      </div>
    </main>
  )
}