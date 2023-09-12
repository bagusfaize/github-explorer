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
        //stimulate delay to show loading skeleton little bit longer 
        await new Promise((resolve) => setTimeout(resolve, 750));
        const response = await client.get("search/users", {params: { q, page, per_page }});

        return response.data.items;

    } catch (error) {
        console.error('Error:', error);
    }
}

export const getUserRepo = async ({ q: username }: QueryParamsProps) => {
    try {
        //stimulate delay to show loading skeleton little bit longer 
        await new Promise((resolve) => setTimeout(resolve, 750));
        const response = await client.get(`/users/${username}/repos`);

        return response.data;
    } catch (error) {
        console.error('Error:', error);
    }
}

export const getUserDetails = async ({ q: username }: QueryParamsProps) => {
    try {
        const response = await client.get(`/users/${username}`);
        return response.data;
    } catch (error) {
        console.error('Error:', error);
    }

}