"use client"

import { useUsers } from "./hooks/use-users"

export default function Home() {

  const {data = [], isLoading} = useUsers();

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="flex flex-col items-center justify-center">
        <div>
          <h1 className="text-3xl">GitHub Explorer</h1>
          <input type="text" className="border border-sky-800 px-3 py-1" />
          <button className="bg-sky-800	text-white px-3 py-1 mx-3">Search</button>
        </div>
        <div className="flex">
          {data.map(user => (
            <div className="bg-white p-5 m-3" key={user.login}>
              {user.login}
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}