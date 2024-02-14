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
