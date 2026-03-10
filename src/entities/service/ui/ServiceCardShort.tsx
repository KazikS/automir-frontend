import { Text, Image, Box } from "@chakra-ui/react";
import { CustomCard } from "@/shared/ui/CustomCard";
import { ServiceType } from "../model/type";

export const ServiceCardShort = ({ image, name, description }: ServiceType) => {
  return (
    <CustomCard p="5" w={{ base: "full", md: undefined }} href="/service">
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
    </CustomCard>
  );
};
