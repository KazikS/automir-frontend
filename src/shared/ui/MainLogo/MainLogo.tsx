import { Link, Text, TextProps } from "@chakra-ui/react";

type MainLogoProps = TextProps;

export const MainLogo = ({ color }: MainLogoProps) => {
  return (
    <Link
      flexDirection="column"
      textDecoration="none"
      position="relative"
      pb="5"
      w={{ base: "32", md: "64" }}
      h={{ base: "14", md: "20" }}
      href="/"
      _focus={{ outline: "none", boxShadow: "none" }}
      _focusVisible={{ outline: "none", boxShadow: "none" }}
    >
      <Text fontSize={{ base: "3xl", md: "6xl" }} color={color} lineHeight="1">
        Автомир
      </Text>
      <Text
        position="absolute"
        bottom="0"
        right={{ base: "4", md: "7" }}
        fontSize="xl"
        color="text.secondary"
      >
        Котлас
      </Text>
    </Link>
  );
};
