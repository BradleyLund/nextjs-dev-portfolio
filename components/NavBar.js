import DarkModeSwitch from "../components/DarkModeSwitch";
import { Text, Heading, Flex, Stack } from "@chakra-ui/react";
import Link from "next/link";
import { Button, ButtonGroup } from "@chakra-ui/react";

export default function NavBar() {
  return (
    <Flex direction="row">
      <DarkModeSwitch />

      <Link href="/">
        <a>
          <Button colorScheme="teal" variant="ghost">
            Home
          </Button>
        </a>
      </Link>
      <Link href="/about">
        <a>
          <Button colorScheme="teal" variant="ghost">
            About
          </Button>
        </a>
      </Link>
      <Link href="/projects">
        <a>
          <Button colorScheme="teal" variant="ghost">
            Projects
          </Button>
        </a>
      </Link>
      <Link href="/contact">
        <a>
          <Button colorScheme="teal" variant="ghost">
            Contact
          </Button>
        </a>
      </Link>
    </Flex>
  );
}
