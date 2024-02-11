import React, { useState } from "react";

import {
  Box,
  HStack,
  Heading,
  Input,
  Text,
  Button,
  FormControl,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import MyGoals from "./MyGoals";
import { addGoal } from "../../Reducers/goalsReducer";
import { v4 as uuidv4 } from "uuid";
import toast, { Toaster } from "react-hot-toast";
import Sidebar from "../Layout/Sidebar/Sidebar";
const MyStats = () => {
  const { allExpenses, history } = useSelector((state) => state.expenses);
  const dispatch = useDispatch();

  const [goal, setGoal] = useState("");
  const totalExpensesAmount = allExpenses?.reduce(
    (acc, iter) => acc + iter.amount,
    0
  );
  const totalCreditAmount = history
    ?.filter((credit) => !credit?.category)
    .reduce((acc, iter) => acc + iter.amount, 0);

  const handleAddGoal = () => {
    if (!goal.trim()) return;
    dispatch(addGoal({ id: uuidv4(), goal }));
    toast("Added goal", {
      icon: "👏",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
    setGoal("");
  };
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
          <Text fontWeight="bold" color="red">
            Total Expenses - ${totalExpensesAmount || 0}
          </Text>
          <Text color="green" fontWeight="bold">
            Total Credit -${totalCreditAmount || 0}
          </Text>
        </HStack>
        <HStack marginTop=".5rem" spacing="24px">
          <FormControl>
            <Input
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              placeholder="Your Goal.. "
            />
          </FormControl>
          <Button
            variant="solid"
            colorScheme="green"
            onClick={handleAddGoal}
          >
            Add Goal
          </Button>
        </HStack>
        <MyGoals />
      </Box>
      <Toaster />
    </Box>
  );
};

export default MyStats;
