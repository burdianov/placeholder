import { create } from "zustand";

import { Todo } from "../types/todo";

interface TodoStore extends Todo {
  setId: (id: number) => void;
  setTitle: (title: string) => void;
  setDescription: (description: string) => void;
  setChecked: (checked: boolean) => void;
  reset: () => void;
}

export const useTodoStore = create<TodoStore>((set) => ({
  id: undefined,
  title: "",
  description: "",
  checked: false,
  setId: (id: number) => set(() => ({ id })),
  setTitle: (title: string) => set(() => ({ title })),
  setDescription: (description: string) => set(() => ({ description })),
  setChecked: (checked: boolean) => set(() => ({ checked })),
  reset: () =>
    set(() => ({
      id: undefined,
      title: "",
      description: "",
      checked: false,
    })),
}));
