import { Box, BoxProps } from "@chakra-ui/react";

export const Divider = ({ ...rest }: BoxProps) => {
  return (
    <Box
      border="solid"
      borderColor="border.default"
      borderWidth="0.5px"
      {...rest}
    />
  );
};
