import React, { useState } from "react";
import Sidebar from "./Sidebar";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Stack,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
  FormControl,
  Select,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { deleteExpense, editExpense, moveToHistory } from "../Reducers/expenseReducer";

const Expenses = () => {
  const { all } = useSelector((state) => state.expenses);
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [editExpenseId,setEditExpenseId] = useState("");
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

  const handleEditModal = (expense) => {
    onOpen();
    setName(expense.name);
    setAmount(expense.amount);
    setCategory(expense.category);
    setEditExpenseId(expense.id)
  };

  const handleEditExpense = () => {
    if (!amount || !name || !category) {
      alert("All fields are required");
      return;
    }
    const editedExpense = {
      id: editExpenseId,
      name,
      amount: Number(amount),
      category,
      date: formattedDate(),
      year: new Date().getFullYear(),
    };
  
    dispatch(editExpense(editedExpense));
    setAmount("");
    setName("");
    setCategory("");
    onClose();
    setEditExpenseId("")
  };
  console.log(all)
  return (
    <Box height="100vh" display="flex" width="100%" padding="1rem">
      <Box
        flex="0.2"
        height="48%"
        padding=".5rem"
        borderRight="1px solid black"
      >
        <Sidebar />
      </Box>
      <Box marginLeft="1rem" border="1px solid black" flex=".8">
        <Heading
          marginTop="1rem"
          borderBottom="1px solid  #b99494"
          textAlign="center"
          paddingBottom=".2rem"
        >
          All Expenses
        </Heading>
        <Box
          overflowY="scroll"
         height="75vh"
          padding="1rem"
          display="flex"
          flexWrap="wrap"
          gap="10px"
        >
          {all?.length > 0 &&
            all?.map((expense) => (
              <Card height="15rem" key={expense.id}>
                <CardBody>
                  <Stack mt="6" spacing="3">
                    <Heading color="red.600" size="sm">
                      {" "}
                      {expense.name.toUpperCase()}
                    </Heading>

                    <Text color="blue.600" fontSize="2xl">
                      ${expense.amount}
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing="2">
                    <Button
                      onClick={() => dispatch(moveToHistory(expense))}
                      variant="solid"
                      colorScheme="yellow"
                    >
                      Add to history
                    </Button>
                    <Button
                      onClick={() => handleEditModal(expense)}
                      variant="solid"
                      colorScheme="green"
                    >
                      Edit
                    </Button>
                    <Button
                      onClick={() => dispatch(deleteExpense(expense))}
                      variant="solid"
                      colorScheme="red"
                    >
                      Delete
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
            ))}
        </Box>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit your expense </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ModalBody
              display="flex"
              gap={2}
              alignItems="center"
              flexDir="column"
            >
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
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleEditExpense}>
              Edit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Expenses;
