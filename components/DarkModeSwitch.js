import { useColorMode } from "@chakra-ui/color-mode";
import { IconButton } from "@chakra-ui/button";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

// The darkmode switch using chakra ui

export default function DarkModeSwitch() {
  // implementation for the chakra ui dark mode, toggleColormode is the function that will toggle between the light modes
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
