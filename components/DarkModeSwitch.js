import { useColorMode } from "@chakra-ui/color-mode";
import { IconButton } from "@chakra-ui/button";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function DarkModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      colorScheme="teal"
      variant="ghost"
      aria-label="Toggle Dark Switch"
      icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
      onClick={toggleColorMode}
    />
  );
}
