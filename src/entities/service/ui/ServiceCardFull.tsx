import { ServiceType } from "../model/type";
import { Box, Image, Text, VStack } from "@chakra-ui/react";

export const ServiceCardFull = ({
  image,
  name,
  description,
  id,
}: ServiceType) => {
  return (
    <VStack
      p="5"
      w="full"
      borderBottom="1px solid"
      borderLeft={{base: 'none', md: id % 2 == 0 ? "0.5px solid" : ""}}
      borderRight={{base: 'none', md: id % 2 != 0 ? "0.5px solid" : ""}}

    >
      <Box
        w="24"
        h="24"
        p="1"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Image src={image} alt="" />
      </Box>
      <Text fontSize="2xl" fontWeight="bold">
        {name}
      </Text>
      <Text lineClamp="3" color="text.secondary" fontWeight="medium" mt="auto">
        {description}
      </Text>
    </VStack>
  );
};
