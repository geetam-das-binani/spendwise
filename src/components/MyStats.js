import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { Box, HStack, Heading, Input, Text ,Button,FormControl} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import MyGoals from "./MyGoals";
const MyStats = () => {
  const { all, history } = useSelector((state) => state.expenses);
  const { goals } = useSelector((state) => state.goals);
 const [goal,setGoal]=useState("")
  const totalExpensesAmount = all?.reduce((acc, iter) => acc + iter.amount, 0);
  const totalCreditAmount = history
    ?.filter((credit) => !credit?.category)
    .reduce((acc, iter) => acc + iter.amount, 0);

  return (
    <Box display="flex" padding="1rem">
      <Box height="45%" flex="0.2">
        <Sidebar />
      </Box>

      <Box
        padding="1.5rem"
        height="80vh"
        overflowY="scroll"
        border="2px solid 
        rgba(233,233,233,.8)"
        flex=".8"
      >
        <Heading size="lg" textAlign="center">
          FINANCIAL STATS
        </Heading>
        <HStack
          padding=".5rem"
          borderBottom="1px solid rgba(233,233,233,.8)"
          marginTop="1rem"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Text>Total Expenses - ${totalExpensesAmount || 0}</Text>
          <Text>Total Credit -${totalCreditAmount || 0}</Text>
        </HStack>
        <HStack
        marginTop=".5rem"
        spacing="24px">
        <FormControl>
              <Input
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                placeholder="Your Goal.. "
              />
            </FormControl>
            <Button variant="solid" colorScheme="green">Add Goal</Button>
        </HStack>
        <MyGoals />
      </Box>
    </Box>
  );
};

export default MyStats;
