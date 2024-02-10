import { configureStore } from "@reduxjs/toolkit";
import { expenseReducer } from "./Reducers/expenseReducer";
import { goalsReducer } from "./Reducers/goalsReducer";




export const store=configureStore({
    reducer:{
        [expenseReducer.name]:expenseReducer.reducer,
        [goalsReducer.name]:goalsReducer.reducer
    }
})