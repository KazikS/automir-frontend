import { CarCardType } from "@/entities/car/model/type";
import { CarCard } from "@/entities/car/ui/CarCard";
import { Grid } from "@chakra-ui/react";

export const CarList = ({ cars, isFullList }: { cars: CarCardType[], isFullList: boolean }) => {
  const carsArray = isFullList ? cars : cars.filter((car) => {
    const referenceDate = new Date('2024-01-31');
    const carCreatedDate = new Date(car.createdAt);
    return carCreatedDate > referenceDate;
  })
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
      {carsArray.map((car) => (
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
