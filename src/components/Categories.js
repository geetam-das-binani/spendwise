import React from "react";
import { useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import { Box } from "@chakra-ui/react";
import { Card, CardBody, Stack, Heading, Text } from "@chakra-ui/react";

import { useSelector } from "react-redux";

const Categories = () => {
  const { name } = useParams();
 
  const { all } = useSelector((state) => state.expenses);

  return (
    <Box height="100vh" display="flex" width="100%" padding="1rem">
      <Box flex="0.2" height="48%" padding=".5rem" border="1px solid black">
        <Sidebar />
      </Box>
      <Box marginLeft="1rem" border="1px solid black" flex=".8">
        <Heading
          marginTop="1rem"
          borderBottom="1px solid  #b99494"
          textAlign="center"
          paddingBottom=".2rem"
        >
          {name}
        </Heading>
        {all?.length > 0 &&
        all?.filter(exp=>exp.category===name)?.map((expense) => (
          <Card key={expense.id} width="15vmax">
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
        ))}
      </Box>
    </Box>
  );
};

export default Categories;
