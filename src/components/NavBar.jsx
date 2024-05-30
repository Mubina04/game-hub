import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} paddingX={"10px"}>
      <Image src={logo} boxSize={"32px"} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;