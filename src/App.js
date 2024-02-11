import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Categories from "./components/Categories/Categories";
import Expenses from "./components/Expenses/Expenses";
import MyStats from "./components/MyStats/MyStats";
import Navbar from "./components/Layout/Navbar/Navbar";
import { useSelector } from "react-redux";

const App = () => {
  const { allExpenses, history } = useSelector((state) => state.expenses);
  const { goals } = useSelector((state) => state.goals);
  useEffect(() => {
    localStorage.setItem("allDailyExpenses", JSON.stringify(allExpenses));
    localStorage.setItem("history", JSON.stringify(history));
    localStorage.setItem("goals", JSON.stringify(goals));
  }, [allExpenses, history, goals]);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/category/:name" element={<Categories />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/stats" element={<MyStats />} />
      </Routes>
     
    </BrowserRouter>
  );
};

export default App;
