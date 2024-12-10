import { Link } from "react-router-dom";

import Spinner from "../components/spinner";
import { useTodos } from "../services/queries";
import TodoComponent from "../components/todo-component";

export default function Todos() {
  const todosQuery = useTodos();

  if (todosQuery.isPending) {
    return (
      <div className="flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (todosQuery.isError) {
    return (
      <div className="flex items-center justify-center">
        <span className="text-red-600">There was an error</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="mb-4">Todos</h1>
      <div className="flex flex-col gap-2">
        {todosQuery.data.map(
          (todo) => todo.id && <TodoComponent key={todo.id} {...todo} />
        )}
      </div>
    </div>
  );
}
