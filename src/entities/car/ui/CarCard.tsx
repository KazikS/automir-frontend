import { Card } from "@/shared/ui/Card";
import { Badge, Flex, Text } from "@chakra-ui/react";
import { CarCardType } from "../model/type";
import { carBadge as badge } from "../lib/config";
import { CardCarousel } from "../../../shared/ui/CardCarousel/CardCarousel";
import { divideNumberByPieces } from "@/shared/utils/numberFormatter";

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
}: CarCardType) => {
  const CAR_IMAGES_MOCK = [
    "https://images.hgmsites.net/lrg/2023-toyota-camry-se-auto-natl-angular-front-exterior-view_100857360_l.jpg",
    "https://autockidka.ru/storage/images/sjbVBodWj6FIGcORBE92p96Yvehg96.jpg",
    "https://avatars.mds.yandex.net/get-autoru-vos/5151058/57ab63b704d452f9ef94b58cf30ce80a/456x342",
    "https://kolesa-uploads.ru/-/1594e96c-d8ac-4101-b905-c288cb73b95d/toyota-camry-front1-mini.jpg",
  ];
  console.log(badge[category].color + badge[category].label);
  return (
    <Card>
      <Badge
        position="absolute"
        w="20"
        h="8"
        rounded="full"
        bgColor={badge[category].color}
        top="4"
        left="4"
        justifyContent="center"
        color="text.inverse"
        fontSize=""
        zIndex={2}
      >
        новый
      </Badge>
      <Flex borderBottom="1px solid" borderColor="border.default">
        <CardCarousel images={CAR_IMAGES_MOCK} />
      </Flex>
      <Flex flexDirection="column" p="2.5">
        <Text fontSize="xl">{brand} {model} {year}</Text>
        <Text fontSize="sm" color="text.tertiary">
          {engineVolume}L/{power} л.с. · {transmission} · {divideNumberByPieces(mileage)} км
        </Text>
        <Text fontSize="xl" color="text.accent">
          {divideNumberByPieces(price)} р.
        </Text>
      </Flex>
    </Card>
  );
};
