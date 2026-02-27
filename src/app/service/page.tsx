import { MOCK_SERVICES } from "@/entities/service/lib/config";
import { ServiceCardFull } from "@/entities/service/ui/ServiceCardFull";
import { Grid, Text, VStack } from "@chakra-ui/react";

export default function Services() {
  return (
    <VStack px="5" align="start">
      <Text
        fontSize="xl"
        position="relative"
        w="fit-content"
        _after={{
          content: '""',
          position: "absolute",
          bottom: 0,
          left: "3",
          right: "-14",
          height: "1px",
          bg: "border.default",
        }}
      >
        Услуги
      </Text>
      <Grid
        w="full"
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
        }}
        gap="0"
      >
        {MOCK_SERVICES.map((service) => (
          <ServiceCardFull
            key={service.id}
            image={service.image}
            name={service.description}
            description={service.description}
            id={service.id}
          />
        ))}
      </Grid>
    </VStack>
  );
}
