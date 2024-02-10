import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  all: [],
  daily: [],

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
    editExpense: (state, action) => {
      state.daily = state.daily.map((exp) =>
        exp.id === action.payload.id ? action.payload : exp
      );
      state.all = state.daily.map((exp) =>
        exp.id === action.payload.id ? action.payload : exp
      );
    },
    creditExpense: (state, action) => {
      state.history = [...state.history, action.payload];
    },
  },
});

export const {
  addExpense,
  moveToHistory,
  deleteExpense,
  editExpense,
  creditExpense,
} = expenseReducer.actions;
