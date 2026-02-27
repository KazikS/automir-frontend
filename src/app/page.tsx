import { CAR_MOCK } from "@/entities/car/lib/config";
import { MOCK_SERVICES } from "@/entities/service/lib/config";
import { BenefitsList } from "@/widgets";
import { GridList } from "@/widgets/grid/GridList";
import { Hero } from "@/widgets";
import { ServiceList } from "@/widgets/serviceList/ServiceList";
import { Box, Flex, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Hero />
      <Flex flexDirection="column" px="5">
        <BenefitsList />
        <Box>
          <Text
            fontSize="xl"
            position="relative"
            w="fit-content"
            _after={{
              content: '""',
              position: "absolute",
              bottom: 0,
              left: "5",
              right: "-10",
              height: "1px",
              bg: "border.default",
            }}
          >
            Актуальные предложения
          </Text>
          <GridList cards={CAR_MOCK} isFullList={false} />
        </Box>

        <Flex
          my="24"
          border="1px solid"
          borderColor="border.default"
          p="10"
          rounded="xl"
          flexDirection="column"
          alignItems="end"
        >
          <Text
            fontSize="xl"
            position="relative"
            w="fit-content"
            _after={{
              content: '""',
              position: "absolute",
              bottom: 0,
              left: "-10",
              right: "5",
              height: "1px",
              bg: "border.default",
            }}
          >
            Услуги автосалона
          </Text>
          <Flex w="full">
            <ServiceList services={MOCK_SERVICES} />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
