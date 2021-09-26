import DarkModeSwitch from "../components/DarkModeSwitch";
import { Flex } from "@chakra-ui/react";
import Link from "next/link";
import { Button } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { MdHome } from "react-icons/md";

export default function NavBar() {
  return (
    <Flex direction="row" mt={5}>
      <Link href="/">
        <a>
          {/* the fontsize variable gets passed the different sizes based on the size of the viewing device, chakra ui allows passing of
        an array with the size values for the different screen sizes */}
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
