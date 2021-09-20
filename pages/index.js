import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Text, Heading, Flex, Stack } from "@chakra-ui/react";
import Navbar from "../components/NavBar";

export default function Home() {
  return (
    <Stack as="main" align="center">
      <Flex flexDirection="column">
        <Navbar />
        <Heading>Hello, World!</Heading>
        <Text>Hello, again</Text>
      </Flex>
    </Stack>
  );
}
