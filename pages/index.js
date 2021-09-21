import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Text, Heading, Flex, Stack } from "@chakra-ui/react";
import Navbar from "../components/NavBar";

// can use this for changing alignment and flex direction etc when responsive
// align={["flex-end", "center"]}

export default function Home() {
  return (
    <Flex flexDirection="column">
      <Navbar />
      <Heading>Hello, World!</Heading>
      <Text>Hello, again</Text>
    </Flex>
  );
}
