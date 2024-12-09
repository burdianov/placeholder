import { Link } from "react-router-dom";
import Spinner from "../components/spinner";
import { useTodos } from "../services/queries";

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
          (todo) =>
            todo.id && (
              <Link
                key={todo.id}
                to={`/todos/${todo.id}`}
                className="px-4 py-2 bg-green-500 rounded hover:bg-green-400 transition"
              >
                {todo.title}
              </Link>
            )
        )}
      </div>
    </div>
  );
}
