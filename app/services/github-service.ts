import axios, { AxiosResponse } from "axios"

const API_BASE_URL = "https://api.github.com/"

const client = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        Accept: 'application/json'
    }
})

export const getUsersTemp = async () => {
    try {
        const response = await client.get("search/users?q=faize&page=1&per_page=5");
        return response.data.items;
    } catch (error) {
        console.error('Error:', error);
    }
}

export const searchUsers = async () => {
// todo search user
}