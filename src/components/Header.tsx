import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Flex, Box, Spacer, IconButton, useColorMode } from "@chakra-ui/react";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <header>
      <Flex direction={"row"}>
        <Box m={4}>
          <h1>Space</h1>
        </Box>
        <Spacer />
        <IconButton
          onClick={toggleColorMode}
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        >
          Switch to {colorMode === "light" ? "Dark" : "Light"}
        </IconButton>
      </Flex>{" "}
    </header>
  );
};

export default Header;
