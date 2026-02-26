import { CarCardType } from "@/entities/car/model/type";
import { CarCard } from "@/entities/car/ui/CarCard";
import { TrailerCardType } from "@/entities/trailer/model/type";
import { TrailerCard } from "@/entities/trailer/ui/TrailerCard";
import { Grid } from "@chakra-ui/react";

function isCarCard(card: CarCardType | TrailerCardType): card is CarCardType {
  return "engineVolume" in card;
}

export const GridList = ({
  cards,
  isFullList,
}: {
  cards: CarCardType[] | TrailerCardType[];
  isFullList: boolean;
}) => {
  const cardsArray = isFullList
    ? cards
    : cards.filter((card) => {
        const referenceDate = new Date("2024-01-31");
        const carCreatedDate = new Date(card.createdAt);
        return carCreatedDate > referenceDate;
      });
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
      {cardsArray.map((card) => {
        if (isCarCard(card)) {
          return (
            <CarCard
              key={card.images[0]}
              brand={card.brand}
              model={card.model}
              year={card.year}
              engineVolume={card.engineVolume}
              mileage={card.mileage}
              price={card.price}
              transmission={card.transmission}
              power={card.power}
              category={card.category}
              images={card.images}
              createdAt={card.createdAt}
            />
          );
        }
        return (
          <TrailerCard
            key={card.images[0]}
            product_category={card.product_category}
            trailer_category={card.trailer_category}
            model={card.model}
            capacity={card.capacity}
            width={card.width}
            length={card.length}
            height={card.height}
            price={card.price}
            createdAt={card.createdAt}
            year={card.year}
            images={card.images}
          />
        );
      })}
    </Grid>
  );
};
