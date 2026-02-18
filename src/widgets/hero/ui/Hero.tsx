import { Flex, Text } from "@chakra-ui/react";

export const Hero = () => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      bg="surface.hero"
      py="16"
    >
      <Text
        fontSize="5xl"
        lineHeight="1.25"
        textAlign="center"
        textDecoration="uppercase"
        textTransform="uppercase"
        fontWeight="medium"
        letterSpacing="0px"
      >
        Твой автомобиль
        <br />
        наша ответственность
      </Text>
      <Text
        fontSize="xl"
        textAlign="center"
        lineHeight="1.1"
        color="text.secondary"
        mt="1"
      >
        Новые и подержанные автомобили, прицепы и<br />
        профессиональный сервис в Котласе
      </Text>
    </Flex>
  );
};
