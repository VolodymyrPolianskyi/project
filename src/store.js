import { configureStore } from "@reduxjs/toolkit"
import toDoreducer from './features/ToDo/toDoSlice'

export default configureStore({
    reducer: {
        todo: toDoreducer
    }
})