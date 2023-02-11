/* eslint-disable no-console */
import { type User } from "../interfaces/User";
import axios, { type AxiosResponse } from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const fetchUserByID = async (id: string): Promise<User | User[]> => {
  const response: AxiosResponse = await api.get(`/users/?id=${id}`);
  const user: User = response.data;

  return user;
};

export const fetchUsers = async (): Promise<User[]> => {
  const response: AxiosResponse = await api.get("/users");
  const users: User[] = response.data;

  return users;
};

export const createUser = async (user: User): Promise<User | Error> => {
  try {
    const response: AxiosResponse = await api.post(`/users`, user);

    return response.data;
  } catch (error) {
    return error as Error;
  }
};

export const updateUser = async (user: User): Promise<User | Error> => {
  try {
    const response: AxiosResponse = await api.put(`/users/${user.id as string}`, user);

    return response.data;
  } catch (error) {
    return error as Error;
  }
};

export const deleteUser = async (id: string): Promise<number | Error> => {
  try {
    const response: AxiosResponse = await api.delete(`/users/${id}`);

    return response.status;
  } catch (error) {
    return error as Error;
  }
};
