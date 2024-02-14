import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    items: [],
};

const todoSlice = createSlice({
    name: "todo",
    initialState: initialState,
    reducers: {
        addTodo(state, action) {

        },
        removeTodo(state, action) {
        },
    },
});

export const todoActions = todoSlice.actions;

export default todoSlice.reducer;
