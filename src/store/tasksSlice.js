import { createSlice } from "@reduxjs/toolkit";



export const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        data: []
    },

    reducers: {
        addTask: (state, action) => {
           state.data = [...state.data, action.payload]
        }
    }
})

export const { addTask } = tasksSlice.actions;
// export const selectNotes = (state) => state.notes.data;
export default tasksSlice.reducer;