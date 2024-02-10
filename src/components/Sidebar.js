import { VStack, StackDivider } from "@chakra-ui/react";

import React from "react";
import { Link, useLocation } from "react-router-dom";

const LinksArray = [
  { route: "/", name: "Dashboard" },
  { route: "/category/Bills&Payments", name: "Bills and Payments" },
  { route: "/category/Entertainment", name: "Entertainment" },
  { route: "/category/Food", name: "Food" },
  { route: "/expenses", name: "Expenses" },
  { route: "/stats", name: "My Stats" },
];
const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <VStack
      padding={2}
      divider={<StackDivider borderColor="gray.200" />}
      spacing={4}
      align="stretch"
    >
      {LinksArray?.map((link, index) => (
        <Link
          style={{
            fontWeight: pathname === link.route ? "bold" : "",
          }}
          to={link.route}
          key={index}
        >
          {link.name}
        </Link>
      ))}
    </VStack>
  );
};

export default Sidebar;
