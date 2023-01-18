import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        }
    }
});
//exporting each slice action so components can use it and make them available in the store.
export const { increment, decrement } = counterSlice.actions;
//exporting the full reducer so store can use it
export default counterSlice.reducer;