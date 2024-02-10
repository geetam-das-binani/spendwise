import { Box } from "@chakra-ui/react";
import React from "react";
import Sidebar from "./Sidebar";
import DailyExpenses from "./DailyExpenses";

const Dashboard = () => {
  return (
    <div
      style={{
        padding: ".5rem",
        border: "2px solid black",
        width: "100%",
       height: "100Vh",
        display: "flex",
        gap:'5px',
         
        justifyContent: "space-between",
        // alignItems: "center",
      }}
    >
      <Box height="45%" border="1px solid black" flex="0.2">
        <Sidebar />
      </Box>
      <Box border="1px solid black" flex="0.6">
        <DailyExpenses />
      </Box>
      <Box flex="0.2" border="1px solid black">
      history transactions
      </Box>
    </div>
  );
};

export default Dashboard;
