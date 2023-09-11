import Image from "next/image";
import { GithubUserProps } from "../types/types";
import { FaGithub } from 'react-icons/fa'
import Link from "next/link";

type ProfileCardProps = {
  user: GithubUserProps,
  label: string
}

export default function ProfileCard({ user, label }: ProfileCardProps) {
  return (
    <div className="bg-white p-5 flex justify-between rounded-md shadow-sm cursor-pointer">
      <div className="flex">
        <div className="rounded-lg h-11 w-11 overflow-hidden mr-5">
          <Image
            width={300}
            height={300}
            src={user.avatar_url}
            alt="Profile"
            className="object-cover object-center h-full w-full"
          />
        </div>
        <div className="flex flex-col justify-between">
          <div className="capitalize">
            <span>{user.login}</span>
          </div>
          <div className="flex items-center text-gray-500" >
            <FaGithub className="mr-1 text-sm" />
            <span className="text-xs">Github</span>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="w-28 py-2 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-black text-white hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 text-xs"
      >
        {label}
      </button>
    </div>
  )
}