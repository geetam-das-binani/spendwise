import React, { useState } from "react";

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
import {
  deleteExpense,
  editExpense,
  moveToHistory,
} from "../../Reducers/expenseReducer";
import { formattedDate } from "../../utils/utils";
import { SmallCloseIcon } from "@chakra-ui/icons";
import toast, { Toaster } from "react-hot-toast";
import Sidebar from "../Layout/Sidebar/Sidebar";
const Expenses = () => {
  const { allExpenses } = useSelector((state) => state.expenses);
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [editExpenseId, setEditExpenseId] = useState("");

  const handleEditModal = (expense) => {
    onOpen();
    setName(expense.name);
    setAmount(expense.amount);
    setCategory(expense.category);
    setEditExpenseId(expense.id);
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
    toast('Edited successfully',  {
      icon: '👏',
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    })
    setAmount("");
    setName("");
    setCategory("");
    onClose();
    setEditExpenseId("");
  };

  return (
    <Box height="100vh" display="flex" width="100%" padding="1rem">
      <Box flex="0.2" height="48%">
        <Sidebar />
      </Box>
      <Box marginLeft="1rem" border="1px solid rgba(220,220,220,.5)" flex=".8">
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
          {allExpenses?.length > 0 ? (
            allExpenses?.map((expense) => (
              <Card
                boxShadow=" rgba(0, 0, 0, 0.35) 0px 5px 15px;"
                height="15rem"
                key={expense.id}
              >
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
                      onClick={() => {
                        
                        toast('Moved to history',  {
                          icon: '👏',
                          style: {
                            borderRadius: '10px',
                            background: '#333',
                            color: '#fff',
                          },
                        })
                        dispatch(moveToHistory(expense))}}
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
                      onClick={() => {
                        toast("Deleted successfully", {
                          icon: "👏",
                          style: {
                            borderRadius: "10px",
                            background: "#333",
                            color: "#fff",
                          },
                        });

                        dispatch(deleteExpense(expense));
                      }}
                      variant="solid"
                      colorScheme="red"
                    >
                      Delete
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
            ))
          ) : (
            <Box height="70vh" width="100%" display="grid" placeItems="center">
              <Text textTransform="uppercase" fontWeight="bold" fontSize="2rem">
                Currently No Expenses to show{" "}
                <SmallCloseIcon color="red" fontSize="3rem" fontWeight="bold" />
              </Text>
            </Box>
          )}
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
      <Toaster />
    </Box>
  );
};

export default Expenses;
