import { Link } from "react-router-dom";

import { Todo } from "../types/todo";
import { useTodoStore } from "../store/store";

export default function TodoComponent(props: Todo) {
  const { id, title, description, checked } = props;

  const { setId, setTitle, setDescription, setChecked } = useTodoStore();

  const handleClick = () => {
    if (id) {
      setId(id);
    }
    setTitle(title);
    setDescription(description);
    setChecked(checked);
  };

  return (
    <div className="p-4">
      <div>Id: {id}</div>
      <div>Title: {title}</div>
      <div>Description: {description}</div>
      <div>Checked: {checked ? "true" : "false"}</div>
      <Link
        to={`/todos/${id}`}
        className="py-2 text-indigo-600  hover:text-indigo-800 hover:font-semibold transition"
        onClick={handleClick}
      >
        Edit Todo
      </Link>
    </div>
  );
}
