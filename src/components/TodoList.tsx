import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { TodoContextType } from "../contexts/TodoContextType";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
  const { todos } = useContext<TodoContextType>(TodoContext);

  return (
    <div className="mx-auto w-[700px] bg-slate-100 rounded-lg">
      <div className="p-4">
        <h4 className="text-xl font-bold mb-2 rounded-sm bg-slate-200 p-2">
          لیست کارها
        </h4>
        <div>
          {todos?.map((todo) => (
            <TodoListItem key={todo.id} todo={todo}></TodoListItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
