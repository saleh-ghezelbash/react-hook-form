import { useContext } from "react";
// import { Todo } from "../models/Todo";
import { TodoContext } from "../contexts/TodoContext";
import { TodoContextType } from "../contexts/TodoContextType";
import { Todo } from "../services/TodoService";

interface TodoListItemProps {
  todo: Todo;
}

const TodoListItem = (props: TodoListItemProps) => {
  const { removeTodo, toggle } = useContext<TodoContextType>(TodoContext);

  const onRemove = (todo: Todo) => {
    removeTodo(todo);
  };

  const handleChange = () => {
    toggle(props.todo);
  };

  return (
    <div
      className="flex gap-1 my-2 p-2 rounded-md bg-gray-200"
      id={props.todo.id.toString()}
    >
      <div className="flex gap-1 ml-auto">
        <input
          className="w-5 ml-2"
          type="checkbox"
          checked={props.todo.done}
          onChange={handleChange}
        />
        <div className="w-full">{props.todo.title}</div>
      </div>
      <div className="uk-width-auto">
        <button
          className="bg-red-300 hover:bg-red-500 text-white block w-full font-bold border rounded-lg text-sm px-2 py-1"
          onClick={() => onRemove(props.todo)}
        >
          حذف
        </button>
      </div>
    </div>
  );
};

export default TodoListItem;
