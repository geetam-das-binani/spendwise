import { VStack, StackDivider } from "@chakra-ui/react";
import { LinksArray } from "../utils/utils";
import React from "react";
import { Link, useLocation } from "react-router-dom";


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
          {link.name.toLocaleUpperCase()}
        </Link>
      ))}
    </VStack>
  );
};

export default Sidebar;
