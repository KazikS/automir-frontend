import { Link, Text, TextProps } from "@chakra-ui/react";

type MainLogoProps = TextProps;

export const MainLogo = ({ color }: MainLogoProps) => {
  return (
    <Link
      flexDirection="column"
      textDecoration="none"
      position="relative"
      pb="5"
      w="64"
      h="20"
    >
      <Text fontSize="6xl" color={color} lineHeight="1">
        Автомир
      </Text>
      <Text
        position="absolute"
        bottom="0"
        right="7"
        fontSize="xl"
        color="text.secondary"
      >
        Котлас
      </Text>
    </Link>
  );
};
