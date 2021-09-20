import DarkModeSwitch from "../components/DarkModeSwitch";
import { Text, Heading, Flex, Stack } from "@chakra-ui/react";
import Link from "next/link";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { AiFillHome } from "react-icons/fa";
import { IconButton, Icon } from "@chakra-ui/react";
import { MdHome } from "react-icons/md";

export default function NavBar() {
  return (
    <Flex direction="row" mt={5}>
      <Link href="/">
        <a>
          <Button
            fontSize={["sm", "md", "lg", "xl"]}
            colorScheme="teal"
            variant="ghost">
            <Icon as={MdHome} />
          </Button>
        </a>
      </Link>
      <Link href="/about">
        <a>
          <Button
            fontSize={["sm", "md", "lg", "xl"]}
            colorScheme="teal"
            variant="ghost">
            About
          </Button>
        </a>
      </Link>
      <Link href="/projects">
        <a>
          <Button
            fontSize={["sm", "md", "lg", "xl"]}
            colorScheme="teal"
            variant="ghost">
            Projects
          </Button>
        </a>
      </Link>
      <Link href="/contact">
        <a>
          <Button
            fontSize={["sm", "md", "lg", "xl"]}
            colorScheme="teal"
            variant="ghost">
            Contact
          </Button>
        </a>
      </Link>
      <DarkModeSwitch />
    </Flex>
  );
}
