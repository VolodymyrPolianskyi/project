import { createSlice } from "@reduxjs/toolkit";


export const toDoSlice = createSlice({
    name: 'todo',
    initialState:{
        todos: [],

    },
    reducers:{
        addTask: (state, action) => {
            state.todos.push(action.payload)
        }
    }
})


export const {addTask} = toDoSlice.actions

export default toDoSlice.reducer