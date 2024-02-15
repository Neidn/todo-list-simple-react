import React from 'react';
import {useSelector} from 'react-redux';
import TodoCard from "../../components/todoCard/TodoCard";



const TodoList = () => {
    const {todos} = useSelector((state) => state.todos);

    return (
        <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}>
            {todos.filter((todo) => todo.is_done === false).map((todo, index) => (
                <TodoCard
                    key={index}
                    id={todo.id}
                    title={todo.title}
                    content={todo.content}
                />
            ))}
        </div>
    );
}

export default TodoList;
