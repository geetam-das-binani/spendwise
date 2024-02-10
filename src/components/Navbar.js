import { Box, Button, useDisclosure } from "@chakra-ui/react";
import React, { Fragment, useState } from "react";
import { Text } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { FormControl, Input, Select } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addExpense } from "../Reducers/expenseReducer";
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const dispatch=useDispatch()

  const formattedDate = () => {

    const date = new Date();
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const month = monthNames[date.getMonth()];
    const day = date.getDate();
    
    return `${month} ${day}`;
  };

  const handleAddExpense = () => {
    if(!amount||!name || !category) {
        alert('All fields are required')
        return
    }
    const newExpense = {
      id: uuidv4(),
      name,
      amount:Number(amount),
      category,
      date: formattedDate(),
    };
   dispatch(addExpense(newExpense));
    onClose();
    setAmount('')
    setName("")
    setCategory("")
  };
  
  return (
    <Fragment>
      <Box
        display="flex"
        alignItems="center"
        bg="white"
        w="100%"
        p="5px 10px 5px 10px"
        borderWidth="5px"
        justifyContent="space-between"
      >
        <Text d={{ base: "none", md: "flex" }} px="4">
          SpendWise
        </Text>

        <Stack spacing={4} direction="row" align="center">
          <Button colorScheme="blue">Log Credit</Button>

          <Button onClick={() => onOpen()} colorScheme="blue">
            Log Expense
          </Button>
        </Stack>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Log your expense</ModalHeader>
          <ModalCloseButton />
          <ModalBody display="flex"
          gap={2}
          alignItems="center" flexDir="column">
            <FormControl>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="expense name"
              />
            </FormControl>
            <FormControl>
              <Input
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="amount"
              />
            </FormControl>
            <FormControl>
              <Select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Select category"
              >
                <option value="Food">Food </option>
                <option value="Bills&Payments">Bills and Payments</option>
                <option value="Entertainment">Entertainment</option>
              </Select>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleAddExpense}>
              Add Expense
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Fragment>
  );
};

export default Navbar;
