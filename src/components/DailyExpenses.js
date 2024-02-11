import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardBody, Stack, Heading, Text, Box } from "@chakra-ui/react";
import { SmallCloseIcon } from "@chakra-ui/icons";
const DailyExpenses = () => {
  const { dailyExpenses, allExpenses } = useSelector((state) => state.expenses);
  const [chartData, setChartData] = useState([]);
  const handleExpensesAmount = (expensesCategory) => {
    const totalExpenseAmount = dailyExpenses
      .filter((exp) => exp.category === expensesCategory)
      .reduce((acc, exp) => acc + exp.amount, 0);

    return totalExpenseAmount;
  };

  const handleChart = () => {
    const data = dailyExpenses.map((d) => ({
      name: `${d.name} (${d.date})`,
      amt: d.amount,
      pv: d.amount,
      uv: d.amount,
    }));
    setChartData(data);
  };
  useEffect(() => {
    handleChart();
  }, [dailyExpenses, allExpenses]);

  return (
    <div
      style={{
        padding: ".5rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        width: "100%",
      }}
    >
      <Box
        display="flex"
        gap="1rem"
        justifyContent="space-around"
        marginBottom="1rem"
      >
        {dailyExpenses.length > 0 &&
          dailyExpenses?.slice(0, 3)?.map((expense) => (
            <Card key={expense.id} width="15vmax">
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
      </Box>
      {!dailyExpenses.length ? (
        <Box
          display="grid"
          placeItems="center"
          height="70vh"
          width="100%"
          fontWeight="bold"
          textTransform="uppercase"
        >
          <Text fontSize="2rem">
            Add an expense to start tracking{" "}
            <SmallCloseIcon color="red" fontSize="3rem" fontWeight="bold" />
          </Text>
        </Box>
      ) : (
        <Box
          padding="1rem"
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="100%"
          minHeight="30vh"
          boxShadow=" rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;"
        >
          <LineChart
            width={730}
            height={500}
            fontWeight="bold"
            data={chartData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </Box>
      )}
    </div>
  );
};

export default DailyExpenses;
