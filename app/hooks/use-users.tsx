import { useQuery } from "@tanstack/react-query"
import { getUsersTemp } from "../services/github-service"
import { GithubUser } from "../types/types";


export const useUsers = () => {
    const { data, isLoading } = useQuery<GithubUser[], Error>(["githubUsers"], () => getUsersTemp());

    return{
        data,
        isLoading
    }
}