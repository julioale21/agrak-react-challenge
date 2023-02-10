import { type User } from "../interfaces/User";
import axios, { type AxiosResponse } from "axios";

const baseUrl = "https://635017b9df22c2af7b630c3e.mockapi.io/api/v1";

const api = axios.create({
  baseURL: baseUrl,
});

export const fetchUsers = async (): Promise<User[]> => {
  const response: AxiosResponse = await api.get("/users");
  const users: User[] = response.data;

  return users;
};

export const deleteUser = async (id: string): Promise<number | Error> => {
  try {
    const response: AxiosResponse = await api.post(`/users/${id}`);

    return response.status;
  } catch (error) {
    return error as Error;
  }
};
