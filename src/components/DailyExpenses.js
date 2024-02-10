import React from "react";
import { useSelector } from "react-redux";
import { Card, CardBody, Stack, Heading, Text } from "@chakra-ui/react";
const DailyExpenses = () => {
  const { daily } = useSelector((state) => state.expenses);
  const handleExpensesAmount = (expensesCategory) => {
    const totalExpenseAmount = daily
      .filter((exp) => exp.category === expensesCategory)
      .reduce((acc, exp) => acc + exp.amount, 0);

    return totalExpenseAmount;
  };
  return (
    <div
      style={{
        padding: ".5rem",
        display: "flex",
        justifyContent: "space-around",
        width: "100%",
        border: "1px solid black",
      }}
    >
      {daily.length > 0 &&
        daily?.slice(0, 3)?.map((expense) => (
          <Card width="15vmax">
            <CardBody>
              <Stack mt="6" spacing="3">
                <Heading color="red.600" size="sm">
                  {" "}
                  {expense.category.toUpperCase()}
                </Heading>

                <Text color="blue.600" fontSize="2xl">
                  ${handleExpensesAmount(expense.category)}
                </Text>
              </Stack>
            </CardBody>
          </Card>
        ))}
    </div>
  );
};

export default DailyExpenses;
