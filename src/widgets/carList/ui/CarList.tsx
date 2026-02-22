import { CarCardType } from "@/entities/car/model/type";
import { CarCard } from "@/entities/car/ui/CarCard";
import { Grid } from "@chakra-ui/react";

export const CarList = ({ cars }: { cars: CarCardType[] }) => {
  return (
    <Grid
      templateColumns={{
        base: "1fr",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
      }}
      padding="5"
      gap="10"
      justifyItems="center"
    >
      {cars.map((car) => (
        <CarCard
          key={car.images[0]}
          brand={car.brand}
          model={car.model}
          year={car.year}
          engineVolume={car.engineVolume}
          mileage={car.mileage}
          price={car.price}
          transmission={car.transmission}
          power={car.power}
          category={car.category}
          images={car.images}
          createdAt={car.createdAt}
        />
      ))}
    </Grid>
  );
};
