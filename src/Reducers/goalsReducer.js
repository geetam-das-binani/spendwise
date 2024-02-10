import { createSlice } from "@reduxjs/toolkit";

export const goalsReducer = createSlice({
  name: "goals",
  initialState: { goals: [] },
  reducers: {
    addGoal: (state, action) => {
      state.goals = [...state.goals, action.payload];
    },
    deleteGoal: (state, action) => {
      state.goals= state.filter((goal) => goal.id !== action.payload.id);
    },
  },
});

export const { addGoal, deleteGoal } = goalsReducer.actions;
