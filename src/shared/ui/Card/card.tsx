import { LinkBox, LinkOverlay } from "@chakra-ui/react";

export const Card = () => {
  return (
    <LinkBox
      border="1px solid"
      maxW="350px"
      rounded="20px"
      borderColor="border.subtle"
      overflow="hidden"
      cursor="pointer"
      transition="all 0.2s"
    >
      <LinkOverlay display="flex" flexDirection="column"></LinkOverlay>
    </LinkBox>
  );
};
