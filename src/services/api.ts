import axios from "axios";
import { Todo } from "../types/Todo";

const BASE_URL = "http://localhost:8080";
const axiosInstance = axios.create({ baseURL: BASE_URL });

export const getTodos = async () => {
  return (await axiosInstance.get<Todo[]>("todos")).data;
};

export const getTodoById = async (id: number) => {
  return (await axiosInstance.get<Todo>(`todos/${id}`)).data;
};

export const createTodo = async (data: Todo) => {
  await axiosInstance.post<Todo>("todos", data);
};

export const updateTodo = async (data: Todo) => {
  await axiosInstance.put<Todo>(`todos/${data.id}`, data);
};
