import React, {useState, useReducer, useRef} from "react";
import {useNavigate} from "react-router-dom";
import {LuPen} from "react-icons/lu";
import {useDispatch} from "react-redux";

import {todoActions} from "../../store/slice/todoSlice";
import {TOKEN_KEY} from "../../lib/config_key";
import {SIGN_OUT_URL} from "../../lib/config_url";
import {API_POST_TODO_URL} from "../../lib/config";
import axios from "axios";


const initialTodoState = {
    title: "",
    content: "",
}

const todoReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE":
            return {
                ...state,
                [action.name]: action.value,
            }
        case "RESET":
            return initialTodoState;
        default:
            return state;
    }
}

const TodoAddForm = () => {
    const contentTextarea = useRef();
    const titleInput = useRef();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [todoState, todoDispatch] = useReducer(todoReducer, initialTodoState, () => initialTodoState);
    const [focus, setFocus] = useState(false);
    const [round, setRound] = useState("rounded-lg");

    const [placeholderText, setPlaceholderText] = useState({
        title: "Add a new todo",
        content: "",
    });

    const onFocusHandler = () => {
        setFocus(true);
        setRound("rounded-t-lg");
        setPlaceholderText({
            title: "Add a new todo title",
            content: "Add a new todo content",
        })
    }

    const onTextChangeHandler = (e) => {
        todoDispatch({
            type: "CHANGE",
            name: e.target.id,
            value: e.target.value,
        })
    }

    const onTextareaChangeHandler = (e) => {
        contentTextarea.current.style.height = "auto"; // 높이 초기화
        contentTextarea.current.style.height = contentTextarea.current.scrollHeight + 10 + "px";

        onTextChangeHandler(e);
    }

    const resetTodoState = () => {
        todoDispatch({type: "RESET"});
        setFocus(false);
        contentTextarea.current.value = "";
        titleInput.current.value = "";
    }

    const addTodoHandler = async () => {
        const token = localStorage.getItem(TOKEN_KEY);
        const headers = {
            "Content-Type": "application/json",
            'Authorization': `${token}`,
        };

        const body = {
            title: todoState.title,
            content: todoState.content,
            is_done: false,
        }

        try {
            const response = await axios.post(
                API_POST_TODO_URL,
                body,
                {headers: headers},
            );

            if (response.status !== 201) {
                alert("Failed to add a todo");
                return;
            }


            dispatch(todoActions.addTodo(response.data));
            resetTodoState();
        } catch (error) {
            console.log('error', error);
            if (error.response.status === 400) {
                alert("Failed to add a todo");
            } else if (error.response.status === 401) {
                navigate(SIGN_OUT_URL, {replace: true});
                alert("Unauthorized");
            } else {
                alert("Server error");
            }
        }

    }

    return (
        <div className={"m-4"}>
            <label for="search"
                   className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <LuPen className="h-5 w-5 text-gray-500 dark:text-gray-400" aria-hidden="true"/>
                </div>
                <input
                    ref={titleInput}
                    type="title"
                    id="title"
                    className={round + " block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300  bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}
                    placeholder={placeholderText.title}
                    required
                    onFocus={onFocusHandler}
                    onChange={onTextChangeHandler}
                />
            </div>
            {focus &&
                <div>
                    <textarea
                        ref={contentTextarea}
                        id="content"
                        className={"block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none"}
                        placeholder={placeholderText.content}
                        onChange={onTextareaChangeHandler}
                        required
                    />
                    <div
                        className={"flex justify-end p-2 rounded-b-lg border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}>
                        <button
                            type="button"
                            onClick={addTodoHandler}
                            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                        >
                            Add
                        </button>

                    </div>
                </div>
            }
        </div>
    );
}

export default TodoAddForm;
