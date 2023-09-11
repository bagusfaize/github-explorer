"use client"

import ProfileCard from "./components/profile-card";
import { useUsers } from "./hooks/use-users"

export default function Home() {

  const {data = [], isLoading} = useUsers();

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <main className="min-h-screen mx-10">
      <div className="flex flex-col items-center justify-center">
        <div className="my-5">
          <h1 className="text-3xl text-center">GitHub Explorer</h1>
          <input type="text" className="border border-sky-800 px-3 py-1" />
          <button className="bg-sky-800	text-white px-3 py-1 mx-3">Search</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 w-full md:w-auto">
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