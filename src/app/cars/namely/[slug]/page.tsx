import { CAR_DETAIL_MOCK } from "@/entities/car/lib/config";
import { PageCarousel } from "@/widgets/PageCarousel";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

export default async function Car({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const id = Number(slug);
  const carInfo = CAR_DETAIL_MOCK.find((car) => car.id === id);

  if (!carInfo) return null;

  return (
    <Box px="8">
      <Flex gap="10" flexDirection={{ base: "column", md: "row" }}>
        <Flex>
          <Box h="96" display="flex" alignItems="center">
            <PageCarousel images={carInfo.images} />
          </Box>
        </Flex>

        <Flex flexDirection="column" minW="1/3">
          <Heading textWrap="nowrap">
            {carInfo.brand} {carInfo.model} {carInfo.year}
          </Heading>
          <Text fontSize="2xl" fontWeight="bold" color="text.accent" mb="10">
            {carInfo.price.toLocaleString("ru-RU")} ₽
          </Text>

          <Text>Поколение: {carInfo.generation}</Text>
          <Text>Комплектация: {carInfo.equipment}</Text>
          <Text>Кузов: {carInfo.body}</Text>
          <Text>Цвет: {carInfo.color}</Text>
          <Text>Пробег: {carInfo.mileage.toLocaleString("ru-RU")} км</Text>

          <Text>
            Двигатель: {carInfo.fuelType}, {carInfo.engineVolume}л,
            {carInfo.power} л.с.
          </Text>
          <Text>Коробка: {carInfo.transmission}</Text>
          <Text>Привод: {carInfo.drive}</Text>
          <Text>Руль: {carInfo.wheelPosition}</Text>
        </Flex>
      </Flex>
      <Text fontSize="2xl" fontWeight="bold" mt="20">Описание</Text>
      <Text>{carInfo.description}</Text>
    </Box>
  );
}
