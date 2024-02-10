import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  all: [],
  daily: [],
  credit: [],
  history: [],
};
export const expenseReducer = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    addExpense: (state, action) => {
      state.daily = [...state.daily, action.payload];
      state.all = [...state.all, action.payload];
    },
    deleteExpense: (state, action) => {
      state.daily = state.daily.filter(
        (expense) => expense.id !== action.payload.id
      );
      state.all = state.all.filter(
        (expense) => expense.id !== action.payload.id
      );
    },
    moveToHistory: (state, action) => {
      state.daily = state.daily.filter(
        (expense) => expense.id !== action.payload.id
      );
      state.all = state.all.filter(
        (expense) => expense.id !== action.payload.id
      );
      state.history = [...state.history, action.payload];
    },
  },
});

export const { addExpense, moveToHistory, deleteExpense } =
  expenseReducer.actions;
