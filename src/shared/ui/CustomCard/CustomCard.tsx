import { LinkBox, LinkBoxProps, LinkOverlay } from "@chakra-ui/react";
import { ReactNode } from "react";

type CardType = {
  children: ReactNode;
} & LinkBoxProps;

export const CustomCard = ({ children, ...props }: CardType) => {
  return (
    <LinkBox
      border="1px solid"
      maxW="350px"
      rounded="20px"
      borderColor="border.default"
      overflow="hidden"
      cursor="pointer"
      transition="all 0.2s"
      h="full"
      {...props}
    >
      <LinkOverlay display="flex" flexDirection="column" h="full">
        {children}
      </LinkOverlay>
    </LinkBox>
  );
};
