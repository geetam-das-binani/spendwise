import { Box } from "@chakra-ui/react";
import React from "react";
import Sidebar from "./Sidebar";
import DailyExpenses from "./DailyExpenses";
import History from "./History";

const Dashboard = () => {

  return (
    <div
      style={{
        padding: "1rem",
        border: "2px solid black",
        width: "100%",
       height: "100Vh",
        display: "flex",
        gap:'5px',
         
        justifyContent: "space-between",
        
      }}
    >
      <Box height="45%" flex="0.2">
        <Sidebar />
      </Box>
      <Box border="1px solid black" flex="0.6">
        <DailyExpenses />
      </Box>
      <Box flex="0.2" borderTop="1px solid black" borderLeft="1px solid black">
       <History />
      </Box>
    </div>
  );
};

export default Dashboard;
