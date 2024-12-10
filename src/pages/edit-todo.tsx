import { Navigate, useParams } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";

import ButtonSpinner from "../assets/button-spinner.svg";
import { useUpdateTodo } from "../services/mutations";
import { Todo } from "../types/todo";
import { useEffect } from "react";
import { useTodoStore } from "../store/store";

export default function TodoItem() {
  const updateTodoMutation = useUpdateTodo();

  const params = useParams<{ id: string }>();
  const todoId = params.id ? Number(params.id) : undefined;

  const { id, title, description, checked, reset } = useTodoStore();

  useEffect(() => {
    setValue("id", id);
    setValue("title", title);
    setValue("description", description);
    setValue("checked", checked);

    return () => {
      reset();
    };
  }, [reset]);

  const {
    formState: { errors },
    handleSubmit,
    register,
    setValue,
  } = useForm<Todo>();

  if (updateTodoMutation.isSuccess) {
    return <Navigate to={"/todos"} replace />;
  }

  const handleUpdateTodoSubmit: SubmitHandler<Todo> = (data) => {
    updateTodoMutation.mutate(data);
  };

  const handleError = (errors: []) => {};

  const registerOptions = {
    title: {
      required: "Title is required",
      minLength: {
        value: 2,
        message: "Title must be at least 2 characters",
      },
    },
    description: {
      required: "Description is required",
      minLength: {
        value: 10,
        message: "Description must be at least 10 characters",
      },
    },
  };

  return (
    <div className="flex flex-col items-center">
      <form
        className="flex flex-col w-1/3 items-stretch mb-6"
        onSubmit={handleSubmit(handleUpdateTodoSubmit)}
      >
        <h4 className="font-bold mt-4 uppercase mb-4">Edit Todo</h4>
        <div>
          <input {...register("id")} hidden value={todoId} />
        </div>
        <div className="mb-4">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            {...register("title", registerOptions.title)}
            className="px-4 py-2 border rounded mt-2 outline-none focus:ring-1 w-full"
          />
          <small className="text-red-600">
            {errors?.title && errors.title.message}
          </small>
        </div>
        <div className="mb-4">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            {...register("description", registerOptions.description)}
            className="px-4 py-2 border rounded mt-2 outline-none focus:ring-1 w-full"
          />
          <small className="text-red-600">
            {errors?.description && errors.description.message}
          </small>
        </div>
        <div>
          <input type="checkbox" {...register("checked")} hidden />
        </div>
        <div>
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-800 font-bold active:bg-green-700 flex gap-2 items-center transition ml-auto"
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
