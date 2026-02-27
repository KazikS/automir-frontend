import { Text, Image, Box } from "@chakra-ui/react";
import { Card } from "@/shared/ui/Card";
import { ServiceType } from "../model/type";

export const ServiceCardShort = ({ image, name, description }: ServiceType) => {
  return (
    <Card p="5" w={{base: "full", md: undefined}}>
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
    </Card>
  );
};
