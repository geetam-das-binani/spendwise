import { configureStore } from "@reduxjs/toolkit";
import { expenseReducer } from "./Reducers/expenseReducer";




export const store=configureStore({
    reducer:{
        [expenseReducer.name]:expenseReducer.reducer
    }
})