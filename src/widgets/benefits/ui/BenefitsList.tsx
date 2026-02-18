import { Flex } from "@chakra-ui/react";
import { BenefitCard } from "@/shared/ui/BenefitCard";

export const BenefitsList = () => {
  const BENEFITS = [
    { firstLine: "500+", secondLine: "автомобилей", thirdLine: "продано" },
    { firstLine: "15", secondLine: "лет", thirdLine: "на рынке" },
    { firstLine: "98%", secondLine: "положительных", thirdLine: "отзывов" },
  ];
  return (
    <Flex w="full" alignItems="center" justifyContent="center" gap="9" py="6">
      {BENEFITS.map(({ firstLine, secondLine, thirdLine }) => (
        <BenefitCard
          key={firstLine}
          firstLine={firstLine}
          secondLine={secondLine}
          thirdLine={thirdLine}
        />
      ))}
    </Flex>
  );
};
