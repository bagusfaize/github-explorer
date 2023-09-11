import axios, { AxiosResponse } from "axios"
import { QueryParamsProps } from "../types/types";

const API_BASE_URL = "https://api.github.com/"

const client = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        Accept: 'application/json'
    }
})

export const searchUsers = async ({ q, page, per_page }: QueryParamsProps) => {
    try {
        const response = await client.get("search/users", {
            params: { q, page, per_page }
        });
        return response.data.items;
    } catch (error) {
        console.error('Error:', error);
    }

}