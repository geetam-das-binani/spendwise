import { SmallCloseIcon } from "@chakra-ui/icons";
import { Box, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

const History = () => {
  const { history } = useSelector((state) => state.expenses);
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
      {!history.length ? (
        <Box
          height="70vh"
          textAlign="center"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text fontWeight="bold" textTransform="uppercase">
            Currently No history{" "}
            <SmallCloseIcon color="red" fontSize="1.5rem" fontWeight="bold" />
          </Text>
        </Box>
      ) : (
        <VStack overflowY="scroll" height="80vh">
          {history.length > 0 &&
            history?.map((exp) => (
              <Box
                key={exp.id}
                padding=".5rem"
                width="100%"
                borderBottom="1px solid rgba(233,233,233,.8)"
                display="flex"
                flexDirection="column"
                justifyContent="center"
              >
                <Text>
                  <Text fontWeight="bold">{exp.name}</Text>
                  <Text fontWeight="bold">
                    {exp.date} , {exp.year}
                  </Text>
                </Text>
                <Text
                  fontWeight="bold"
                  color={exp.category ? "red" : "green"}
                  alignSelf="flex-end"
                >
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
