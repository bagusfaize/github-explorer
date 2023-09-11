import { useQuery } from "@tanstack/react-query"
import { getUsersTemp } from "../services/github-service"
import { GithubUserProps } from "../types/types";


export const useUsers = () => {
    const { data, isLoading } = useQuery<GithubUserProps[], Error>(["githubUsers"], () => getUsersTemp());

    return{
        data,
        isLoading
    }
}