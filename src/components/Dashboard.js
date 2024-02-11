import { Box } from "@chakra-ui/react";
import React from "react";
import Sidebar from "./Sidebar";
import DailyExpenses from "./DailyExpenses";
import History from "./History";
import { Toaster } from "react-hot-toast";

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
