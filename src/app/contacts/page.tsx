import { Divider } from "@/shared/ui/Divider";
import { YandexMap } from "@/widgets/YMaps/YMaps";
import {
  Text,
  Box,
  Grid,
  Heading,
  HStack,
  Image,
  VStack,
} from "@chakra-ui/react";

export default function Contacts() {
  return (
    <Grid
      templateColumns={{
        base: "1fr",
        md: "repeat(2, 1fr)",
      }}
      gap="5"
      p="5"
    >
      <VStack
        alignItems="start"
        border="1px solid"
        borderColor="border.default"
        rounded="xl"
        p="5"
      >
        <Heading>Информация</Heading>
        <Divider w="full" />
        <HStack>
          <Image src="/images/icons/location.svg" alt="" />
          <VStack align="start">
            <Text lineHeight="1" color="text.tertiary">Адрес</Text>
            <Text lineHeight="1">г. Котлас, улица Чиркова, 25</Text>
          </VStack>
        </HStack>

        <Divider w="full" />
        <HStack>
          <Image src="/images/icons/phone.svg" alt="" />
          <VStack align="start">
            <Text lineHeight="1" color="text.tertiary">Телефон</Text>
            <Text lineHeight="1">+7 (800) 123-45-67</Text>
          </VStack>
        </HStack>

        <Divider w="full" />
        <HStack>
          <Image src="/images/icons/mail.svg" alt="" />
          <VStack align="start">
            <Text lineHeight="1" color="text.tertiary">Почта</Text>
            <Text lineHeight="1">info@automir.ru</Text>
          </VStack>
        </HStack>

        <Divider w="full" />
        <HStack>
          <Image src="/images/icons/clock.svg" alt="" />
          <VStack align="start">
            <Text lineHeight="1" color="text.tertiary">Время работы</Text>
            <Text lineHeight="1">Пн-Пт: 9.00 - 18.00</Text>
          </VStack>
        </HStack>

        <Divider w="full" />
        <HStack>
          <Image src="/images/icons/clock.svg" alt="" />
          <VStack align="start">
            <Text lineHeight="1" color="text.tertiary">Время работы</Text>
            <Text lineHeight="1">Сб-Вс: 9.00 - 17.00</Text>
          </VStack>
        </HStack>

      </VStack>

      <Box border="1px solid" borderColor="border.default" rounded="xl">
        <YandexMap center={[61.25038, 46.677216]} />
      </Box>
    </Grid>
  );
}
