import { Text, Heading, Flex, Stack } from "@chakra-ui/react";
import Navbar from "../components/NavBar";

export default function About() {
  return (
    <Stack as="main" align="center">
      <Flex flexDirection="column" maxWidth="700px">
        <Navbar />
        <Heading>Projects</Heading>
        <Text>My best project</Text>
      </Flex>
    </Stack>
  );
}
