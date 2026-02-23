import { Card } from "@/shared/ui/Card";
import { Badge, Flex, Text } from "@chakra-ui/react";
import { CardCarousel } from "../../../shared/ui/CardCarousel/CardCarousel";
import { dateFormatter, divideNumberByPieces } from "@/shared/utils";
import { TrailerCardType } from "../model/type";
import { productBadge as badge } from "../lib/config";

export const TrailerCard = ({
  product_category,
  trailer_category,
  model,
  capacity,
  width,
  length,
  height,
  price,
  createdAt,
  year,
}: TrailerCardType) => {
  return (
    <Card>
      <Badge
        position="absolute"
        w="24"
        h="8"
        rounded="full"
        bgColor={badge[product_category].color}
        top="4"
        left="4"
        justifyContent="center"
        color="text.inverse"
        fontSize=""
        zIndex={2}
        border="1px solid"
        borderColor="black"
      >
        {badge[product_category].label}
      </Badge>
      <Flex borderBottom="1px solid" borderColor="border.default" h="64">
        <CardCarousel
          images={[
            "/images/trailer-1.jpg",
            "/images/trailer-2.jpg",
            "/images/trailer-3.jpg",
            "/images/trailer-4.jpg",
          ]}
        />
      </Flex>
      <Flex flexDirection="column" p="2.5">
        <Badge
          w="24"
          h="8"
          rounded="md"
          bgColor="surface.hero"
          top="4"
          left="4"
          justifyContent="center"
          color="text.secondary"
          zIndex={2}
          mb="4"
        >
          {trailer_category}
        </Badge>
        <Text fontSize="xl">{model}, {year} г.</Text>
        <Text fontSize="sm" color="text.tertiary">
          {capacity} кг · {`${width}x${length}${height ? `x${height}` : ""}`} м
        </Text>
        <Text fontSize="xl" color="text.accent">
          {divideNumberByPieces(price)} р.
        </Text>
        <Text fontSize="sm" color="text.red" textAlign="end">
          {dateFormatter(createdAt)}
        </Text>
      </Flex>
    </Card>
  );
};
