import Image from "next/image";
import Link from "next/link";
import { GithubUserProps } from "../types/types";
import { FaChevronDown, FaChevronUp, FaGithub } from 'react-icons/fa'

type ProfileCardProps = {
  user: GithubUserProps,
  isOpen: boolean
}

export default function ProfileCard({ user, isOpen }: ProfileCardProps) {
  const generateToggleLabel = () => {
    return (
      <>
        {isOpen ?
          <div className="flex items-center">
            <span className="hidden sm:block">Hide Repos</span>
            <FaChevronUp className="sm:ml-2" />
          </div>
          :
          <div className="flex items-center">
            <span className="hidden sm:block">See Repos</span>
            <FaChevronDown className="sm:ml-2" />
          </div>
        }
      </>
    )
  }

  return (
    <div className={`bg-white p-5 flex justify-between rounded-md shadow-sm cursor-pointer ${isOpen ? "outline outline-sunflower" : ""}`}>
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
          <Link href={user.html_url || "https://github.com/"} className="flex items-center text-gray-500" target="_blank">
            <FaGithub className="mr-1 text-sm" />
            <span className="text-xs">Github Profile</span>
          </Link>
        </div>
      </div>
      <div className="w-12 sm:w-32 py-2 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-black text-white hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 text-xs">
        {generateToggleLabel()}
      </div>
    </div>
  )
}