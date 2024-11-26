import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { TodoContextType } from '../contexts/TodoContextType';
import TodoListItem from './TodoListItem';
// import Navbar from './Navbar';

const TodoList = () => {
    const { todos } = useContext<TodoContextType>(TodoContext);

    return (
        <>
            {/* <Navbar /> */}
            <table className="uk-table">
                <caption>لیست کارها</caption>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>عنوان</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos?.map(
                            todo => (<TodoListItem key={todo.id} todo={todo}></TodoListItem>)
                        )
                    }
                </tbody>

            </table>
        </>
    )
}

export default TodoList;