import React from 'react';
import {useSelector} from 'react-redux';
import TodoCard from "../../components/todoCard/TodoCard";


const TodoList = () => {
    const {todos} = useSelector((state) => state.todos);

    if (todos.length === 0) {
        return (
            <div className={"flex justify-center items-center h-64"}>
                <p className={"text-2xl text-gray-400"}>No todos found</p>
            </div>
        );
    }

    return (
        <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}>
            {todos.filter((todo) => !todo.is_done).map((todo) => (
                <TodoCard
                    key={todo.id}
                    id={todo.id}
                    title={todo.title}
                    content={todo.content}
                    is_done={todo.is_done}
                />
            ))}
        </div>
    );
}

export default TodoList;
