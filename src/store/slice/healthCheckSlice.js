import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    healthCheck: false,
};

const healthCheckSlice = createSlice({
    name: "healthCheck",
    initialState: initialState,
    reducers: {
        setHealthCheck(state, action) {
            state.healthCheck = action.payload;
        },

        resetHealthCheck(state) {
            state = initialState;
        },
    },
});

export const healthCheckActions = healthCheckSlice.actions;

export default healthCheckSlice.reducer;
