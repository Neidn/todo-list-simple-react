import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import axios from "axios";

import {todoActions} from "../../store/slice/todoSlice";
import {API_GET_UNDONE_TODOS_URL} from "../../lib/config";
import {TOKEN_KEY} from "../../lib/config_key";
import TodoCard from "../todoCard/TodoCard";

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
        <>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        <TodoCard
                            id={todo.id}
                            title={todo.title}
                            content={todo.content}
                        />
                    </li>
                ))}
            </ul>

        </>
    );
};

export default TodoList;
