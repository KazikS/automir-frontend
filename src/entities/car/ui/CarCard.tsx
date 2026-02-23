import { Card } from "@/shared/ui/Card";
import { Badge, Flex, Text } from "@chakra-ui/react";
import { CarCardType } from "../model/type";
import { carBadge as badge } from "../lib/config";
import { CardCarousel } from "../../../shared/ui/CardCarousel/CardCarousel";
import { dateFormatter, divideNumberByPieces } from "@/shared/utils";

export const CarCard = ({
  category,
  brand,
  model,
  year,
  engineVolume,
  power,
  transmission,
  mileage,
  price,
  images,
  createdAt,
}: CarCardType) => {
  return (
    <Card h="96">
      <Badge
        position="absolute"
        w="24"
        h="8"
        rounded="full"
        bgColor={badge[category].color}
        top="4"
        left="4"
        justifyContent="center"
        color="text.inverse"
        fontSize=""
        zIndex={2}
        border="1px solid"
        borderColor="black"
      >
        {badge[category].label}
      </Badge>
      <Flex borderBottom="1px solid" borderColor="border.default" h="64">
        <CardCarousel images={images} />
      </Flex>
      <Flex flexDirection="column" p="2.5">
        <Text fontSize="xl">
          {brand} {model} {year}
        </Text>
        <Text fontSize="sm" color="text.tertiary">
          {engineVolume}L/{power} л.с. · {transmission} ·{" "}
          {divideNumberByPieces(mileage)} км
        </Text>
        <Text fontSize="xl" color="text.accent">
          {divideNumberByPieces(price)} р.
        </Text>
        <Text fontSize="sm" color="text.tertiary" textAlign="end">
          {dateFormatter(createdAt)}
        </Text>
      </Flex>
    </Card>
  );
};
