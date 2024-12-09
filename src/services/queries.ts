import { useQuery } from "@tanstack/react-query";
import { getTodoById, getTodos } from "./api";

export function useTodos() {
  return useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });
}

export function useGetTodoById(id: number) {
  return useQuery({
    queryKey: ["todo"],
    queryFn: () => getTodoById(id),
  });
}
