"use client"

import InputSearch from "./components/input-search";
import { useSearchUsers } from "./hooks/use-users";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {

  const {
    searchQuery,
    setSearchQuery,
    redirectToSearchPage,
  } = useSearchUsers({
    page: 1,
    per_page: 6
  });

  const handleSearch = () => {
    redirectToSearchPage()
  }

  return (
    <main className="min-h-screen">
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl text-center">GitHub Explorer</h1>
        <div className="w-full md:w-1/2">
          <InputSearch
            searchQuery={searchQuery}
            onInputChange={(value) => setSearchQuery(value)}
            onSearch={handleSearch}
          />
        </div>
      </div>
    </main>
  )
}