import React, {useState, useRef} from "react";
import axios from "axios";
import {useDispatch} from "react-redux";

import {todoActions} from "../../store/slice/todoSlice";
import {API_PUT_TODO_ID_URL} from "../../lib/config";
import {TOKEN_KEY} from "../../lib/config_key";

const TodoCardToggle = ({id, is_done = false}) => {
    const token = localStorage.getItem(TOKEN_KEY);
    const dispatch = useDispatch();

    const [isDone, setIsDone] = useState(is_done);
    const inputRef = useRef();

    const onChangeHandler = (e) => {
        setIsDone(e.target.checked);
        inputRef.current.checked = e.target.checked;

        updateTodo(id, e.target.checked).then((result) => {
            if (!result) {
                setIsDone(!e.target.checked);
                inputRef.current.checked = !e.target.checked;
                return;
            }
            setTimeout(() => {
                dispatch(todoActions.updateTodoStatus(id, isDone));
            }, 1000);
        });
    }

    const updateTodo = async (id, isDone) => {
        try {
            const headers = {
                'Authorization': `${token}`
            }

            const response = await axios.put(
                `${API_PUT_TODO_ID_URL.replace(':id', id)}`,
                {is_done: isDone},
                {headers: headers},
            );

            if (response.status !== 200) {
                alert("Failed to update todo");
                return false;
            }

            return true;

        } catch (error) {
            console.log('error', error);
            if (error.response.status === 400) {
                alert("Failed to update todo");
            } else {
                alert("Server error");
            }

            return false
        }
    }


    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                className="sr-only peer"
                id={id}
                ref={inputRef}
                onChange={onChangeHandler}
                checked={isDone}
            />
            <div
                className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
            </div>
        </label>
    );
}

export default TodoCardToggle;
