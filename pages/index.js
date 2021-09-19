import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import DarkModeSwitch from "../components/DarkModeSwitch";
import { Text, Heading, Flex, Stack } from "@chakra-ui/react";

export default function Home() {
  return (
    <Stack as="main" align="center">
      <Flex flexDirection="column" maxWidth="700px">
        <Flex direction="row">
          <DarkModeSwitch />
        </Flex>
        <Heading>Hello, World!</Heading>
        <Text>Hello, again</Text>
      </Flex>
    </Stack>
  );
}
