import "./App.css";
import PlantRow from "./components/PlantRow";
import Header from "./components/Header";
import {
  IconButton,
  Flex,
  Spacer,
  Box,
  ChakraProvider,
  Center,
  Button,
  Grid,
  GridItem,
  useColorMode,
} from "@chakra-ui/react";

function App() {
  return (
    <>
      <Header />
      <Center>
        <Flex direction={"row"}>
          <PlantRow
            margin={2}
            defaultValues={[
              "Name",
              "Parent 1",
              "Parent 2",
              "Grows Into",
              "Description",
            ]}
          />
        </Flex>
        <Button colorScheme="blue">Add Seed</Button>
      </Center>
    </>
  );
}

export default App;
