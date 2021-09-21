import { Text, Heading, Flex, Stack } from "@chakra-ui/react";
import Navbar from "../components/NavBar";

export default function Contact() {
  return (
    <Stack as="main" width="100%">
      <Flex align="center" flexDirection="column">
        <Navbar />
        <Heading>Contact</Heading>
        <Text>How to contact</Text>
      </Flex>
    </Stack>
  );
}
