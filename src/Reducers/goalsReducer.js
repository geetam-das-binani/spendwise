import { createSlice } from "@reduxjs/toolkit";

export const goalsReducer = createSlice({
  name: "goals",
  initialState: { goals: localStorage.getItem("goals")
  ? JSON.parse(localStorage.getItem("goals"))
  : [], },
  reducers: {
    addGoal: (state, action) => {
     
      state.goals = [...state.goals, action.payload];
    },
    deleteGoal: (state, action) => {
      state.goals = state.goals.filter((goal) => goal.id !== action.payload.id);
    },
    editMyGoal: (state, action) => {
      state.goals = state.goals.map((goal) =>
        goal.id === action.payload.id ? action.payload : goal
      );
    },
  },
});

export const { addGoal, deleteGoal, editMyGoal } = goalsReducer.actions;
