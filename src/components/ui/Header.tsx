import React from "react";
import { Box, Heading, Flex, Text, Button } from "@chakra-ui/react";

interface MenuItemsProps {
  children: React.ReactNode;
}

const MenuItems: React.FC<MenuItemsProps> = ({ children }) => (
  <Text display="block" mr={6} mt={{ base: 4, md: 0 }}>
    {children}
  </Text>
);

type HeaderProps = Record<string, any>;

const Header: React.FC<HeaderProps> = (props) => {
  const [show, setShow] = React.useState(false);
  const handleToggle = (): void => {
    setShow(!show);
  };

  return (
    <Flex
      align="center"
      as="nav"
      bg="teal.500"
      color="white"
      justify="space-between"
      padding="1.5rem"
      paddingX={{ base: "1rem", md: "3rem" }}
      wrap="wrap"
      {...props}
    >
      <Flex align="center" mr={20}>
        <Heading as="h1" letterSpacing={"-.1rem"} size="lg">
          Agrak
        </Heading>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <svg fill="white" viewBox="0 0 20 20" width="12px" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      <Box
        alignItems="center"
        display={{ base: show ? "block" : "none", md: "flex" }}
        flexGrow={1}
        width={{ base: "full", md: "auto" }}
      >
        <MenuItems>Docs</MenuItems>
        <MenuItems>Examples</MenuItems>
        <MenuItems>Blog</MenuItems>
      </Box>

      <Box display={{ base: show ? "block" : "none", md: "block" }} mt={{ base: 4, md: 0 }}>
        <Button bg="transparent" border="1px">
          Login
        </Button>
      </Box>
    </Flex>
  );
};

export { Header };
