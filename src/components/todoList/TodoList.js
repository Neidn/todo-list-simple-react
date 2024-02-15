import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import axios from "axios";

import {todoActions} from "../../store/slice/todoSlice";
import {API_GET_UNDONE_TODOS_URL} from "../../lib/config";
import {TOKEN_KEY} from "../../lib/config_key";
import TodoCard from "../../containers/todoCard/TodoCard";

const TodoList = () => {
    const dispatch = useDispatch();
    const {todos} = useSelector((state) => state.todos);

    useEffect(() => {
        const getTodos = async () => {
            const token = localStorage.getItem(TOKEN_KEY);
            const headers = {
                'Authorization': `${token}`
            };

            try {
                const response = await axios.get(
                    API_GET_UNDONE_TODOS_URL,
                    {headers: headers},
                );
                if (response.status !== 200) {
                    alert("Failed to get todos");
                    return;
                }
                return response.data;
            } catch (error) {
                if (error.response.status === 400) {
                    alert("Failed to get todos");
                } else {
                    alert("Server error");
                }
            }
        }

        getTodos()
            .then((data) => {
                dispatch(todoActions.setTodos(data));
            }).catch((error) => {
            console.log(error);
        });

    }, [dispatch]);
    return (
        <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}>
            {todos.map((todo, index) => (
                <TodoCard
                    key={index}
                    id={todo.id}
                    title={todo.title}
                    content={todo.content}
                />
            ))}
            {todos.map((todo, index) => (
                <TodoCard
                    key={index}
                    id={todo.id}
                    title={todo.title}
                    content={todo.content}
                />
            ))}
            {todos.map((todo, index) => (
                <TodoCard
                    key={index}
                    id={todo.id}
                    title={todo.title}
                    content={todo.content}
                />
            ))}
            {todos.map((todo, index) => (
                <TodoCard
                    key={index}
                    id={todo.id}
                    title={todo.title}
                    content={todo.content}
                />
            ))}
            {todos.map((todo, index) => (
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
