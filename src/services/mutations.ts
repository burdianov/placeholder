import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createTodo, updateTodo } from "./api";
import { Todo } from "../types/Todo";

export function useCreateTodo() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Todo) => createTodo(data),
    onMutate: () => {
      console.log("mutate");
    },
    onError: (error) => {
      console.log("error:", error);
    },
    onSuccess: () => {
      console.log("success");
    },
    onSettled: async (data, error, variables) => {
      console.log("settled");
      console.log("data>>>", data);
      console.log("variables>>>", variables);
      if (error) {
        console.log(error);
      } else {
        await queryClient.invalidateQueries({ queryKey: ["todos"] });
      }
    },
  });
}

export function useUpdateTodo() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Todo) => updateTodo(data),
    onMutate: () => {},
    onSettled: async (_, error) => {
      if (error) {
        console.log(error);
      } else {
        await queryClient.invalidateQueries({ queryKey: ["todos"] });
      }
    },
  });
}
