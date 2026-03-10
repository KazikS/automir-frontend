import { TRAILER_DETAIL_MOCK } from "@/entities/trailer/lib/config";
import { PageCarousel } from "@/widgets/PageCarousel";
import {
  Box,
  Button,
  Field,
  Fieldset,
  Flex,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";

export default async function Car({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const id = Number(slug);
  const trailerInfo = TRAILER_DETAIL_MOCK.find((trailer) => trailer.id === id);

  if (!trailerInfo) return null;

  return (
    <Box px="8">
      <Flex gap="10" flexDirection={{ base: "column", md: "row" }}>
        <Flex>
          <Box h="fit-content" display="flex" alignItems="center">
            <PageCarousel images={trailerInfo.images} />
          </Box>
        </Flex>

        <Flex flexDirection="column" minW="1/3">
          <Heading textWrap="nowrap">
            {trailerInfo.model} {trailerInfo.year}
          </Heading>
          <Text fontSize="2xl" fontWeight="bold" color="text.accent" mb="10">
            {trailerInfo.price.toLocaleString("ru-RU")} ₽
          </Text>

          <Text>Категория: {trailerInfo.trailer_category}</Text>
          <Text>Грузоподъёмность: {trailerInfo.capacity} кг</Text>
          <Text>Длина: {trailerInfo.length} мм</Text>
          <Text>Ширина: {trailerInfo.width} мм</Text>
          {trailerInfo.height && (
            <Text>Высота борта: {trailerInfo.height} мм</Text>
          )}
          <Text>Кол-во осей: {trailerInfo.axes_count}</Text>
          <Text>Снаряжённая масса: {trailerInfo.mass} кг</Text>
        </Flex>
      </Flex>
      <Text fontSize="2xl" fontWeight="bold" mt="20">
        Описание
      </Text>
      <Text>{trailerInfo.description}</Text>
      <VStack
        my="28"
        w="full"
        border="1px solid"
        borderColor="border.default"
        rounded="xl"
        p="10"
      >
        <Text color="text.primary" fontSize="3xl" fontWeight="bold">
          Хотите приобрести?
        </Text>
        <Text color="text.secondary" fontSize="md">
          Оставьте заявку ниже и мы с вами свяжемся
        </Text>

        <Fieldset.Root display="flex" alignItems="center">
          <Fieldset.Content
            display="flex"
            flexDirection={{ base: "column", md: "row" }}
            maxW="xl"
            w="fit"
            mt="10"
          >
            <Field.Root>
              <Input
                name="name"
                placeholder="ваше имя"
                _placeholder={{
                  textAlign: "center",
                }}
                rounded="xl"
                border="1px solid"
                borderColor="border.default"
                w="48"
              />
            </Field.Root>

            <Field.Root>
              <Input
                name="phone"
                placeholder="номер телефона"
                rounded="xl"
                border="1px solid"
                borderColor="border.default"
                w="48"
                _placeholder={{
                  textAlign: "center",
                }}
              />
            </Field.Root>
            <Button
              type="submit"
              alignSelf="flex-start"
              rounded="xl"
              border="1px solid"
              borderColor="border.default"
              bgColor="border.accent"
              w="48"
            >
              оставить заявку
            </Button>
          </Fieldset.Content>
        </Fieldset.Root>
      </VStack>
    </Box>
  );
}
