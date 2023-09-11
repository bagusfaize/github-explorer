import Image from "next/image";
import { GithubUserProps } from "../types/types";
import { FaGithub } from 'react-icons/fa'

export default function ProfileCard({login : username, avatar_url} : GithubUserProps) {
  return (
    <div className="bg-white p-5 flex rounded-md">
      <div className="rounded-full h-11 w-11 overflow-hidden mr-5">
        <Image
          width={300}
          height={300}
          src={avatar_url}
          alt="Profile"
          className="object-cover object-center h-full w-full"
        />
      </div>
      <div className="flex flex-col justify-between">
        <div className="capitalize">
          <span>{username}</span>
        </div>
        <div className="flex items-center text-gray-500" >
          <FaGithub className="mr-1 text-sm" />
          <span className="text-xs">Visit Github</span>
        </div>
      </div>
    </div>
  )
}