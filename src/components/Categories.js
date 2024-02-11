import React from "react";
import { useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import { Box } from "@chakra-ui/react";
import { Card, CardBody, Stack, Heading, Text } from "@chakra-ui/react";

import { useSelector } from "react-redux";
import { SmallCloseIcon } from "@chakra-ui/icons";

const Categories = () => {
  const { name } = useParams();

  const expenseCategory = useSelector((state) =>
    state.expenses?.allExpenses?.filter((exp) => exp.category === name)
  );

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
          {name}
        </Heading>
        <Box padding="1rem" display="flex" flexWrap="wrap" gap="10px">
          {expenseCategory?.length > 0 ? (
            expenseCategory?.map((expense) => (
              <Card
                boxShadow=" rgba(0, 0, 0, 0.35) 0px 5px 15px;"
                key={expense.id}
                width="15vmax"
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
              </Card>
            ))
          ) : (
            <Box
              display="grid"
              placeItems="center"
              height="70vh"
              width="100%"
              fontWeight="bold"
              textTransform="uppercase"
            >
              <Text fontSize="2rem">
                Currently No Expense to show{" "}
                <SmallCloseIcon color="red" fontSize="3rem" fontWeight="bold" />
              </Text>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Categories;
