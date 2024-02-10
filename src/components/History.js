import { Box, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

const History = () => {
  const { history} = useSelector((state) => state.expenses);
  return (
    <Box>
      <Text
        fontWeight="bold"
        textAlign="center"
        textTransform="uppercase"
        borderBottom="1px solid gray"
        padding=".5rem"
        width="100%"
        background="rgba(233,233,233,.8)"
      >
        Transaction History
      </Text>
      {!history.length  ? (
        ""
      ) : (
        <VStack overflowY="scroll" height="80vh">
          {history.length > 0 &&
            history?.map((exp) => (
              <Box
                padding=".5rem"
                width="100%"
                borderBottom="1px solid rgba(233,233,233,.8)"
                display="flex"
                flexDirection="column"
                justifyContent="center"
              >
                <Text>
                  <Text>{exp.name}</Text>
                  <Text>
                    {exp.date} {exp.year}
                  </Text>
                </Text>
                <Text color={exp.category ? "red":"green"} alignSelf="flex-end">
                  ${exp.amount}
                </Text>
              </Box>
            ))}
        </VStack>
      )}
    </Box>
  );
};

export default History;
