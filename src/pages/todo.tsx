import { Navigate, useParams } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";

import { useGetTodoById } from "../services/queries";
import Spinner from "../components/spinner";

import ButtonSpinner from "../assets/button-spinner.svg";
import { useUpdateTodo } from "../services/mutations";
import { Todo } from "../types/Todo";

export default function TodoItem() {
  const updateTodoMutation = useUpdateTodo();

  const params = useParams<{ id: string }>();
  const todoId = params.id ? Number(params.id) : undefined;
  const todo = todoId ? useGetTodoById(todoId) : null;

  const { handleSubmit, register } = useForm<Todo>();

  if (todo?.isFetching) {
    return (
      <div className="flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (updateTodoMutation.isSuccess) {
    return <Navigate to={"/todos"} replace />;
  }

  const handleUpdateTodoSubmit: SubmitHandler<Todo> = (data) => {
    updateTodoMutation.mutate(data);
  };

  return (
    <div className="flex flex-col items-center">
      <form
        className="flex flex-col w-1/2 items-stretch mb-6"
        onSubmit={handleSubmit(handleUpdateTodoSubmit)}
      >
        <h4 className="font-bold mt-4 mb-4 uppercase">Edit Todo</h4>
        <input {...register("id")} hidden value={todoId} />
        <input
          type="text"
          placeholder={todo?.data?.title}
          {...register("title")}
          className="px-4 py-2 border rounded mt-2 outline-none focus:ring-1"
        />
        <input
          type="text"
          placeholder={todo?.data?.description}
          {...register("description")}
          className="px-4 py-2 border rounded mt-2 outline-none focus:ring-1"
        />
        <input type="checkbox" {...register("checked")} hidden />
        <div>
          <button
            type="submit"
            className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-800 font-bold active:bg-green-700 flex gap-2 items-center transition"
            disabled={updateTodoMutation.isPending}
          >
            {updateTodoMutation.isPending && <ButtonSpinner />}
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
