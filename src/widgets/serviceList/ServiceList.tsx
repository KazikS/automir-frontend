import { ServiceType } from "@/entities/service/model/type";
import { ServiceCardShort } from "@/entities/service/ui/ServiceCardShort";
import { Grid } from "@chakra-ui/react";

export const ServiceList = ({ services }: { services: ServiceType[] }) => {
  return (
    <Grid
      templateColumns={{
        base: "1fr",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
      }}
      gap="10"
      p="5"
      w="full"
      justifyItems="center"

    >
      {services.map((service) => (
        <ServiceCardShort
          image={service.image}
          name={service.name}
          description={service.description}
          key={service.id}
          id={service.id}
        />
      ))}
    </Grid>
  );
};
