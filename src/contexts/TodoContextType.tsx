// import { Todo } from "../models/Todo";

import { Todo } from "../services/TodoService";


export interface TodoContextType {
    todos: Todo[];
    addTodo(title: string): void;
    removeTodo(todo: Todo): void;
    toggle(todo: Todo): void;
}