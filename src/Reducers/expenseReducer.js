import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allExpenses: localStorage.getItem("allDailyExpenses")
    ? JSON.parse(localStorage.getItem("allDailyExpenses"))
    : [],
  dailyExpenses: localStorage.getItem("allDailyExpenses")
    ? JSON.parse(localStorage.getItem("allDailyExpenses"))
    : [],

  history: localStorage.getItem("history")
    ? JSON.parse(localStorage.getItem("history"))
    : [],
};
export const expenseReducer = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    addExpense: (state, action) => {
      state.dailyExpenses = [...state.dailyExpenses, action.payload];
      state.allExpenses = [...state.allExpenses, action.payload];
    },
    deleteExpense: (state, action) => {
      state.dailyExpenses = state.dailyExpenses.filter(
        (expense) => expense.id !== action.payload.id
      );
      state.allExpenses = state.allExpenses.filter(
        (expense) => expense.id !== action.payload.id
      );
    },
    moveToHistory: (state, action) => {
      state.dailyExpenses = state.dailyExpenses.filter(
        (expense) => expense.id !== action.payload.id
      );
      state.allExpenses = state.allExpenses.filter(
        (expense) => expense.id !== action.payload.id
      );
      state.history = [...state.history, action.payload];
    },
    editExpense: (state, action) => {
      state.dailyExpenses = state.dailyExpenses.map((exp) =>
        exp.id === action.payload.id ? action.payload : exp
      );
      state.allExpenses = state.allExpenses.map((exp) =>
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
