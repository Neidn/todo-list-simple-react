import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    todos: [],
};

const todoSlice = createSlice({
    name: "todo",
    initialState: initialState,
    reducers: {
        addTodo(state, action) {
            state.todos.push(action.payload);
        },
        setTodos(state, action) {
            state.todos = action.payload;
        },
        updateTodoStatus(state, action) {
            const todo = state.todos.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.is_done = !todo.is_done;
            }
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        resetTodos(state) {
            state = initialState;
        },
    },
});

export const todoActions = todoSlice.actions;

export default todoSlice.reducer;
