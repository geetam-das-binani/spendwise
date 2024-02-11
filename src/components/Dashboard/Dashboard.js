import { Box } from "@chakra-ui/react";
import React from "react";

import DailyExpenses from "../Expenses/DailyExpenses";
import History from "../History/History";
import Sidebar from "../Layout/Sidebar/Sidebar";


const Dashboard = () => {
  return (
    <div
      className="dashboard__container"
      style={{
        padding: "1rem",

        width: "100%",
        height: "100Vh",
        display: "flex",
        gap: "5px",

        justifyContent: "space-between",
      }}
    >
      <Box height="45%" flex="0.2">
        <Sidebar />
      </Box>
      <Box borderLeft="2px solid rgba(220, 220, 220, 0.8)" flex="0.6">
        <DailyExpenses />
      </Box>
      <Box
        flex="0.2"
        borderLeft="2px solid rgba(220, 220, 220, 0.8)"
        borderTop="1px solid black"
      >
        <History />
      </Box>
      
    </div>
  );
};

export default Dashboard;
