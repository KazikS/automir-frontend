import { Divider } from "@/shared/ui/Divider";
import { MainLogo } from "@/shared/ui/MainLogo";
import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import { JetBrains_Mono } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "cyrillic"],
  variable: "--font-mono",
  display: "swap",
});

export const Footer = () => {
  const social_networks = ["VK", "TG", "WA"];
  return (
    <Flex flexDirection="column" bgColor="neutral.950" borderTop="1px solid" borderColor="border.default">
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        justifyItems="center"
        p="5"
      >
        <Flex flexDirection="column" justifyContent="space-between">
          <MainLogo color="white" />
          <Text
            color="text.secondary"
            textAlign="justify"
            w={{ base: "200px", md: "300px" }}
            mt="4"
          >
            Продажа автомобилей, прицепов и услуги автосалона в Котласе с 2010
            года
          </Text>
          <Box mt="12">
            <Text color="text.secondary">Мы в сети</Text>
            <Flex mt="2" gap="3">
              {social_networks.map((element) => (
                <Box
                  key={element}
                  bg="text.secondary"
                  rounded="2xl"
                  w="18"
                  p="5"
                >
                  {element}
                </Box>
              ))}
            </Flex>
          </Box>
        </Flex>

        <Flex flexDirection="column" color="text.secondary" pt="2">
          <Box className={jetbrainsMono.className} h="20" mb="4">
            контакты
          </Box>
          <Text>+7 (928) 123-45-67</Text>
          <Text>info@avtomir.ru</Text>
          <Text>г. Котлас, ул. Ленина 42</Text>
        </Flex>

        <Flex flexDirection="column" color="text.secondary">
          <Box className={jetbrainsMono.className} h="20" mb="4">
            режим работы
          </Box>
          <Text>Пн-Пт: 9.00 - 18.00</Text>
          <Text>Сб-Вс: 9.00 - 17.00</Text>
        </Flex>
      </Grid>
      <Divider
        w="calc(100% - 100px)"
        h="1px"
        my="10"
        mx="auto"
        borderColor="neutral.700"
      />
      <Text
        w="full"
        textAlign="center"
        color="text.secondary"
        mb="10"
        fontSize="sm"
      >
        © 2026 Автомир Котлас. Все права защищены.
      </Text>
    </Flex>
  );
};
