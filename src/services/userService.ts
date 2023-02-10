import { type User } from "../interfaces/User";
import axios, { type AxiosResponse } from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const fetchUsers = async (): Promise<User[]> => {
  const response: AxiosResponse = await api.get("/users");
  const users: User[] = response.data;

  return users;
};

export const deleteUser = async (id: string): Promise<number | Error> => {
  try {
    const response: AxiosResponse = await api.delete(`/users/${id}`);

    return response.status;
  } catch (error) {
    return error as Error;
  }
};
